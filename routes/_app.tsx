import { Context } from "fresh";
import { define } from "../utils.ts";

export default define.page((ctx: Context) => {
  const RECAPTCHA_SITE_KEY = Deno.env.get("RECAPTCHA_SITE_KEY");

  return (
    <html data-theme="rustic" lang="en-GB">
      <head>
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
          defer
        >
        </script>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ctx.state.title ?? "Harry Curtis"}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="flex flex-col min-h-screen animate-clockwise bg-radial-[at_75%_75%] from-secondary via-base-100 to-secondary bg-size-[200%_200%]">
        <ctx.Component />
        {
          /* <Navbar />
        <main class="grow flex justify-center text-secondary-content">
          <Component />
        </main>
        <Footer /> */
        }
      </body>
    </html>
  );
});
