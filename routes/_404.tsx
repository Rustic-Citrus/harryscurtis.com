import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function NotFound() {
  return (
    <div class="flex flex-col grow items-center justify-center">
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="text-center">
        <h1 class="text-4xl font-bold">404 - Page not found</h1>
        <p class="my-4">
          The page you were looking for doesn't exist.
        </p>
        <a href="/" class="underline">Go back home</a>
      </div>
    </div>
  );
});
