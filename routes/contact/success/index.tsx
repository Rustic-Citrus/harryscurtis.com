import { Head } from "$fresh/runtime.ts";

export default function ContactSuccess() {
  return (
    <>
      <Head>
        <title>Success!</title>
      </Head>
      <div>
        <h1>Success!</h1>
        <p>Harry was sent your message.</p>
        <p>You may now navigate away from this page.</p>
      </div>
    </>
  );
}
