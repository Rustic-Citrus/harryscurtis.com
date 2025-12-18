import { define } from "../../utils.ts";
import { getCookies, setCookie } from "@std/http/cookie";

export const handler = define.handlers({
  GET(ctx) {
    const cookies = getCookies(ctx.req.headers);
    const currentTheme = cookies.theme || "rustic";
    const newTheme = currentTheme === "rustic" ? "night" : "rustic";
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
  },
});
