import { define } from "../utils.ts";
import "../assets/styles.css";

import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default define.page(function App({ Component, url }) {
  const RECAPTCHA_SITE_KEY = Deno.env.get("RECAPTCHA_SITE_KEY");

  let title = "Harry Curtis";
  if (url.pathname === "/") {
    title = "Home";
  } else if (url.pathname.startsWith("/contact")) {
    title = "Contact";
  } else if (url.pathname.startsWith("/posts")) {
    title = "Posts";
  } else if (url.pathname.startsWith("/about")) {
    title = "About";
  }

  return (
    <html data-theme="rustic">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
          defer
        >
        </script>
        <title>new-personal-site</title>
      </head>
      <body class="flex flex-col grow min-h-screen animate-clockwise bg-radial-[at_75%_75%] from-base-100 via-base-200 to-(--color-bg) bg-size-[300%_300%]">
        <Navbar title={title} />
        <Component />
        <Footer />
      </body>
    </html>
  );
});
