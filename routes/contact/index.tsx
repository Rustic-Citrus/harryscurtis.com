import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import "jsr:@std/dotenv/load";
import { ContactForm } from "../../islands/ContactForm.tsx";
export const handler: Handlers = {
  GET(_req, ctx) {
    const siteKey = Deno.env.get("RECAPTCHA_SITE_KEY");
    if (!siteKey) {
      console.error("RECAPTCHA_SITE_KEY is not set in the environment.");
    }
    return ctx.render({ siteKey });
  },
  async POST(req, _ctx) {
    const formData = await req.formData();
    const token = formData.get("g-recaptcha-response")?.toString();
    const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!token || !secretKey) {
      return new Response("reCAPTCHA configuration error.", { status: 500 });
    }
    const verificationUrl =
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const verificationResult = await fetch(verificationUrl, { method: "POST" });
    const googleResponse: { success: boolean; score: number } =
      await verificationResult.json();
    if (googleResponse.success && googleResponse.score > 0.5) {
      console.log("reCAPTCHA verified. Submitting to web3forms...");
      formData.delete("g-recaptcha-response");
      formData.append("access_key", "518dc71b-89a2-4e91-838c-afc380a61603");
      const web3formsResponse = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await web3formsResponse.json();
      const headers = new Headers();
      if (data.success) {
        headers.set("location", "/contact/success");
        return new Response(null, {
          status: 303,
          headers,
        });
      } else {
        console.error("web3forms submission failed:", data);
        headers.set("location", "/contact?error=submission_failed");
        return new Response(null, { status: 303, headers });
      }
    } else {
      console.warn(
        "reCAPTCHA verification failed. Score:",
        googleResponse.score,
      );
      return new Response(
        "reCAPTCHA verification failed. Are you a robot? 🤖",
        {
          status: 403, // Forbidden
        },
      );
    }
  },
};
export default function Contact({ data }: PageProps<{ siteKey: string }>) {
  const { siteKey } = data;
  return (
    <>
      <Head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        >
        </script>
      </Head>
      <div class="md:mx-24 xl:mx-72">
        <h1 class="text-4xl text-center pb-8 pt-4">Contact</h1>
        <div class="chat chat-start">
          <div class="chat-bubble py-4">
            <p>
              Thanks for taking the time to visit the site. You can leave a
              message using the form below.
            </p>
          </div>
        </div>
        <div class="chat chat-end">
          <ContactForm siteKey={siteKey} />
        </div>
      </div>
    </>
  );
}
