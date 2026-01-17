import { useSignal } from "@preact/signals";

export default function ContactForm({ siteKey }: { siteKey: string }) {
  const submitButtonContent = useSignal(<span>Send</span>);
  const alert = useSignal<
    { type: "success" | "error"; message: string } | null
  >(
    null,
  );

  const onFormSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    submitButtonContent.value = (
      <span class="loading loading-dots loading-md"></span>
    );
    alert.value = null;

    // @ts-ignore: grecaptcha is in window.
    grecaptcha.enterprise.ready(() => {
      // @ts-ignore: grecaptcha is in window.
      grecaptcha.enterprise.execute(siteKey, { action: "submit" }).then(
        async (token: string) => {
          const input = form.querySelector(
            "#g-recaptcha-response",
          ) as HTMLInputElement;
          input.value = token;

          const formData = new FormData(form);
          try {
            const res = await fetch("/contact", {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              body: formData,
            });

            const data = await res.json();

            if (data.success) {
              alert.value = {
                type: "success",
                message: "Message sent successfully!",
              };
              form.reset();
            } else {
              alert.value = {
                type: "error",
                message: data.error || "Something went wrong.",
              };
            }
          } catch (err) {
            console.error(err);
            alert.value = {
              type: "error",
              message: "Network error. Please try again.",
            };
          } finally {
            submitButtonContent.value = <span>Send</span>;
          }
        },
      );
    });
  };
  return (
    <form
      method="POST"
      class="chat-bubble flex flex-col w-full md:w-3/4 md:bg-neutral-100 md:text-black"
      onSubmit={onFormSubmit}
    >
      {alert.value && (
        <div
          role="alert"
          class={`alert ${
            alert.value.type === "success" ? "alert-success" : "alert-error"
          } mb-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            {alert.value.type === "success"
              ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )
              : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )}
          </svg>
          <span>{alert.value.message}</span>
        </div>
      )}
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black">Your name</legend>
        <input
          type="text"
          class="input validator bg-neutral-100 text-black border-neutral-800"
          name="name"
          placeholder="Type here"
          minLength={2}
          maxLength={24}
          required
        />
        <div class="validator-hint hidden">
          The value for name must be between 2 and 24 characters in length.
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black">Your email</legend>
        <input
          type="email"
          class="input validator bg-neutral-100 text-black border-neutral-800"
          name="email"
          placeholder="Type here"
          required
        />
        <div class="validator-hint hidden">
          The value for email must represent a valid email address.
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black">Your message</legend>
        <textarea
          class="textarea validator h-24 bg-neutral-100 text-black border-neutral-800"
          placeholder="Message"
          name="message"
          minLength={5}
          maxLength={1000}
          required
        >
        </textarea>
        <div class="validator-hint hidden">
          Your message must be longer than 5 but shorter than 1000 characters.
        </div>
      </fieldset>
      <input
        type="hidden"
        id="g-recaptcha-response"
        name="g-recaptcha-response"
      />
      <button
        type="submit"
        class="btn btn-primary text-base-content self-end w-full max-w-2/3 my-2"
      >
        {submitButtonContent}
      </button>
    </form>
  );
}
