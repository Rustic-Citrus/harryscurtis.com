export default function Wrapper({ Component }) {
  const RECAPTCHA_SITE_KEY = Deno.env.get("RECAPTCHA_SITE_KEY");

  return (
    <html lang="en-GB" data-theme="rustic">
      <head>
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
          defer
        >
        </script>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="flex flex-col min-h-screen animate-clockwise bg-radial-[at_75%_75%] from-base-100 via-base-200 to-base-300 bg-size-[200%_200%]">
        <Component />
      </body>
    </html>
  );
}
