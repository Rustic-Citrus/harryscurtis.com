import { getCookies } from "@std/http/cookie";
import { define, getPost, getPosts } from "./utils.ts";
import { Post } from "@/types.ts";
export const themeMiddleware = define.middleware(async (ctx) => {
  const cookies = getCookies(ctx.req.headers);
  const theme = cookies.theme;
  if (theme === "rustic" || theme === "night") {
    ctx.state.theme = theme;
  }
  return await ctx.next();
});
export const addPostToContext = define.middleware(async (ctx) => {
  const slug = ctx.params.slug;
  const post: Post | null = await getPost(slug);
  if (post) {
    ctx.state.post = post;
  }
  return await ctx.next();
});
export const addPostsToContext = define.middleware(async (ctx) => {
  const posts: Post[] = await getPosts();
  if (posts) {
    ctx.state.posts = posts;
  }
  return await ctx.next();
});
