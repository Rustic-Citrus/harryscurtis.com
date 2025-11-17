import { App, staticFiles } from "fresh";
import Layout from "./routes/_layout.tsx";

export const app = new App()
  .onError("*", (ctx) => {
    console.log(`Error: ${ctx.error}`);
    return new Response("Oops!", { status: 500 });
  })
  .layout("*", Layout)
  .use(staticFiles())
  .fsRoutes();
