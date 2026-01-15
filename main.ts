import { App, staticFiles } from "fresh";
import {
  addPostsToContext,
  addPostToContext,
  themeMiddleware,
} from "./middleware.ts";
import { ContextState } from "@/types.ts";
import { getCookies, setCookie } from "@std/http/cookie";
export const app = new App<ContextState>();
app.get("/api/theme", (ctx) => {
  const cookies = getCookies(ctx.req.headers);
  const savedTheme = cookies.theme;
  const newTheme = savedTheme === "rustic" ? "night" : "rustic";
  const headers = new Headers();
  setCookie(headers, {
    name: "theme",
    value: newTheme,
    path: "/",
    maxAge: 31536000,
    sameSite: "Lax",
  });
  const referrer = ctx.req.headers.get("referer") || "/";
  headers.set("location", referrer);
  return new Response(null, { status: 302, headers });
});
app.get("/", addPostsToContext, (ctx) => {
  if (ctx.state.posts) {
    const featuredPosts = ctx.state.posts.slice(0, 3);
    ctx.state.featuredPosts = featuredPosts;
  }
  return ctx.next();
});
app.get("/posts/:slug", addPostToContext, (ctx) => {
  return ctx.next();
});
app.get("/posts", addPostsToContext);
app.use(themeMiddleware);
app.use(staticFiles());
app.fsRoutes();
