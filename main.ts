import { App, staticFiles } from "fresh";
import Layout from "./routes/_layout.tsx";
import Wrapper from "./routes/_app.tsx";

export const app = new App()
  .layout("*", Layout)
  .use(staticFiles())
  .appWrapper(Wrapper)
  .onError("*", (ctx) => {
    console.log(`Error: ${ctx.error}`);
    return new Response("Oops!", { status: 500 });
  })
  .fsRoutes();
