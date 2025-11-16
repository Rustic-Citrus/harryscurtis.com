import { define } from "./utils.ts";

// TODO: Define the middleware functions for the reCAPTCHA context.

export const myMiddleware = define.middleware((ctx) => {
  return new Response("hello " + ctx.state.foo);
});

export const otherMiddleware = define.middleware((ctx) => {
  return new Response("other " + ctx.state.foo);
});
