import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="rustic">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>personal-site</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="flex flex-col h-screen">
        <Navbar />
        <main class="grow flex justify-center animate-clockwise bg-radial-[at_75%_75%] from-secondary to-base-100 bg-size-[200%] text-secondary-content">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
