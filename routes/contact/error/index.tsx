import { Head } from "fresh/runtime";

export default function ContactError() {
  return (
    <div class="flex flex-col grow items-center justify-center">
      <Head>
        <title>Error</title>
      </Head>
      <h1 class="text-2xl font-bold text-error">Error</h1>
      <p>Something went wrong.</p>
      <a href="/contact" class="btn btn-primary mt-4">Try Again</a>
    </div>
  );
}
