declare const grecaptcha: any;

interface ContactFormProps {
  siteKey: string;
}

export const ContactForm = ({ siteKey }: ContactFormProps) => {
  const onFormSubmit = (e: Event) => {
    e.preventDefault(); // Stop the form from submitting immediately.
    const form = e.target as HTMLFormElement;

    grecaptcha.ready(function () {
      grecaptcha.execute(siteKey, { action: "submit" }).then(
        function (token: string) {
          // Add the token to a hidden input field
          const input = form.querySelector(
            "#g-recaptcha-response",
          ) as HTMLInputElement;
          input.value = token;

          // Now, submit the form
          form.submit();
        },
      );
    });
  };

  return (
    <form
      method="POST"
      class="chat-bubble lg:w-1/2 flex flex-col"
      onSubmit={onFormSubmit}
    >
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Your name</legend>
        <input
          type="text"
          class="input validator"
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
        <legend class="fieldset-legend">Your email</legend>
        <input
          type="email"
          class="input validator"
          name="email"
          placeholder="Type here"
          required
        />
        <div class="validator-hint hidden">
          The value for email must represent a valid email address.
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Your message</legend>
        <textarea
          class="textarea validator h-24"
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
        class="btn btn-primary self-end w-full max-w-2/3 lg:max-w-1/2 my-2"
      >
        Send
      </button>
    </form>
  );
};
