import { App, staticFiles } from "fresh";
import { themeMiddleware } from "./middleware.ts";

export const app = new App<{ theme: "rustic" | "night" }>();

app.use(themeMiddleware);

app.use(staticFiles());

app.fsRoutes();

app.listen();
