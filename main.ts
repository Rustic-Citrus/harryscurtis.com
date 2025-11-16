import { App, staticFiles } from "fresh";
import { Layout } from "./components/Layout.tsx";

export const app = new App()
  .onError("*", (ctx) => {
    console.log(`Error: ${ctx.error}`);
    return new Response("Oops!", { status: 500 });
  })
  .layout("*", Layout)
  .use(staticFiles())
  .fsRoutes();
