import { define } from "../utils.ts";
import "../assets/styles.css";

import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default define.page(function App({ Component, url }) {
  const RECAPTCHA_SITE_KEY = Deno.env.get("RECAPTCHA_SITE_KEY");

  // NOTE: getNavbarTitle assumes first item in routes is single word string,
  // e.g. "services" not "all-services".
  const getNavbarTitle = (path: string) => {
    const routes: string[] = path.split("/");
    const navbarTitle: string = routes[1][0].toUpperCase() +
      routes[1].substring(1).toLowerCase();
    return navbarTitle;
  };

  const navbarTitle = url.pathname === "/"
    ? "Harry Curtis"
    : getNavbarTitle(url.pathname);

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
        <Navbar title={navbarTitle} />
        <Component />
        <Footer />
      </body>
    </html>
  );
});
