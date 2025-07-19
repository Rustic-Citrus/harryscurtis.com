import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const formData = await req.formData();

    formData.append("access_key", "518dc71b-89a2-4e91-838c-afc380a61603");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const headers = new Headers();

    if (data.success) {
      headers.set("location", "/");
      return new Response(null, {
        status: 300,
        headers,
      });
    } else {
      headers.set("location", "/contact");
      return new Response(null, {
        status: 300,
      });
    }
  },
};

export default function Contact() {
  return (
    <div class="md:mx-24 xl:mx-72">
      <h1 class="text-4xl md:pl-24 xl:pl-72 pb-8 pt-4">Contact</h1>
      <div class="chat chat-start">
        <div class="chat-bubble">
          <p>Thanks for taking the time to visit the site. You can leave a message using the form below.</p>
        </div>
      </div>
      <div class="chat chat-end">
        <form method="POST" class="chat-bubble lg:w-1/2">
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
              Your message must be longer than 5 but shorter than 1000
              characters.
            </div>
          </fieldset>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
