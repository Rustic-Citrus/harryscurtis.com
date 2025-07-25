import { Head } from "$fresh/runtime.ts";

export default function ContactSuccess() {
  return (
    <>
      <Head>
        <title>Success!</title>
      </Head>
      <div class="py-8">
        <div class="card w-96 bg-base-100 card-lg shadow-sm max-h-1/2">
          <div class="badge badge-success absolute -right-2 -top-2">
            <svg
              class="size-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                stroke-linejoin="miter"
                stroke-linecap="butt"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                >
                </circle>
                <polyline
                  points="7 13 10 16 17 8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                >
                </polyline>
              </g>
            </svg>
            Success
          </div>
          <div class="card-body">
            <h2 class="card-title">Message Sent</h2>
            <p>
              It looks like your message was successfully sent to my inbox. I normally reply within 48 hours. Thanks for reaching out!
            </p>
            <div class="justify-end card-actions">
              <a class="btn btn-primary" href="/">
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
