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
      class="chat-bubble flex flex-col w-full bg-base-100 md:w-3/4 md:bg-neutral-100 md:text-black"
      onSubmit={onFormSubmit}
    >
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black" id="nameLegend">
          Your name
        </legend>
        <input
          type="text"
          class="input validator bg-neutral-100 text-black border-neutral-800 w-full"
          name="name"
          placeholder="Type here"
          minLength={2}
          maxLength={24}
          aria-labelledby="nameLegend"
          required
        />
        <div class="validator-hint hidden">
          The value for name must be between 2 and 24 characters in length.
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black" id="emailLegend">
          Your email
        </legend>
        <input
          type="email"
          class="input validator bg-neutral-100 text-black border-neutral-800 w-full"
          name="email"
          placeholder="Type here"
          aria-labelledby="emailLegend"
          required
        />
        <div class="validator-hint hidden">
          The value for email must represent a valid email address.
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend md:text-black" id="messageLegend">
          Your message
        </legend>
        <textarea
          class="textarea validator h-24 bg-neutral-100 text-black border-neutral-800 w-full"
          placeholder="Message"
          name="message"
          minLength={5}
          maxLength={1000}
          aria-labelledby="messageLegend"
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
        aria-label="Send Message"
      >
        {submitButtonContent}
      </button>
    </form>
  );
}
