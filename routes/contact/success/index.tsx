import { Head } from "fresh/runtime";

export default function ContactSuccess() {
  return (
    <div class="flex flex-col grow items-center justify-center">
      <Head>
        <title>Success!</title>
      </Head>
      <h1 class="text-2xl font-bold">Success!</h1>
      <p>Your message has been sent.</p>
      <a href="/" class="btn btn-primary mt-4">Go Home</a>
    </div>
  );
}
