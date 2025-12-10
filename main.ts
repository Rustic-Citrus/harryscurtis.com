import { App, staticFiles } from "fresh";
import { type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

// Include file-system based routes here
app.fsRoutes();

app.listen({ hostname: "0.0.0.0", port: 5123 });
