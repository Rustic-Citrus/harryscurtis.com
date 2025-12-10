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
  } else if (url.pathname.startsWith("/services")) {
    title = "Services";
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
        <title>Harry Curtis</title>
      </head>
      <body class="flex flex-col grow min-h-screen animate-clockwise bg-radial-[at_67%_67%] from-base-100 via-base-200 to-base-300 bg-size-[200%_200%]">
        <Navbar title={title} />
        <Component />
        <Footer />
      </body>
    </html>
  );
});
