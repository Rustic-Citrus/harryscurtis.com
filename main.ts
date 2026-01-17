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
  const newTheme = savedTheme === "summer" ? "wood" : "summer";
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
app.post("/contact", async (ctx) => {
  const formData = await ctx.req.formData();
  const token = formData.get("g-recaptcha-response")?.toString();
  const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY") as string;
  if (!token || !secretKey) {
    return new Response("reCAPTCHA configuration error.", { status: 500 });
  }
  const verificationUrl =
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  const verificationResult = await fetch(verificationUrl, { method: "POST" });
  const googleResponse: { success: boolean; score: number } =
    await verificationResult.json();
  if (googleResponse.success && googleResponse.score > 0.5) {
    console.log("reCAPTCHA verified. Submitting to web3forms...");
    formData.delete("g-recaptcha-response");
    formData.append("access_key", "518dc71b-89a2-4e91-838c-afc380a61603");
    const web3formsResponse = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await web3formsResponse.json();
    const headers = new Headers();

    if (ctx.req.headers.get("accept") === "application/json") {
      if (data.success) {
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        console.error("web3forms submission failed:", data);
        return new Response(
          JSON.stringify({ success: false, error: "Submission failed" }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    if (data.success) {
      headers.set("location", "/contact/success");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      console.error("web3forms submission failed:", data);
      headers.set("location", "/contact?error=submission_failed");
      return new Response(null, { status: 303, headers });
    }
  } else {
    console.warn(
      "reCAPTCHA verification failed. Score:",
      googleResponse.score,
    );
    return new Response(
      "reCAPTCHA verification failed. Are you a robot? 🤖",
      {
        status: 403, // Forbidden
      },
    );
  }
});
app.use(themeMiddleware);
app.use(staticFiles());
app.fsRoutes();
