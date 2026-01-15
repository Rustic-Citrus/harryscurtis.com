import { App, staticFiles } from "fresh";
import {
  addPostsToContext,
  addPostToContext,
  themeMiddleware,
} from "./middleware.ts";
import { ContextState, Post } from "@/types.ts";
import { join } from "@std/path";
import { getPost } from "@/utils.ts";
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
app.get("/api/posts", async () => {
  const posts: Post[] = [];
  const postsDir = join(Deno.cwd(), "posts");
  try {
    for await (const entry of Deno.readDir(postsDir)) {
      if (entry.isFile && entry.name.endsWith(".md")) {
        const slug = entry.name.replace(".md", "");
        const post = await getPost(slug);
        if (post) {
          posts.push(post);
        }
      }
    }
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  const body = JSON.stringify(posts);
  return new Response(body);
});
app.get("/api/post/:slug", addPostToContext, (ctx) => {
  if (!ctx.state.post) {
    return new Response("Post not found!", { status: 404 });
  }
  const post = ctx.state.post;
  const body = JSON.stringify(post);
  return new Response(body);
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
