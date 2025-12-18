import { getCookies } from "@std/http/cookie";
import { define } from "./utils.ts";

export const themeMiddleware = define.middleware(async (ctx) => {
  const cookies = getCookies(ctx.req.headers);

  ctx.state.theme = cookies.theme || "rustic";

  return await ctx.next();
});
