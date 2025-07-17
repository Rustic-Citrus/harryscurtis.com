import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="lofi">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>personal-site</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Navbar />
        <main>
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
