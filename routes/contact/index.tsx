import ContactForm from "../../islands/ContactForm.tsx";
import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";

// NOTE: Can this handler be moved to the app definition as per Fresh >2.0 conventions?
export const handler = define.handlers({
  async POST(ctx) {
    const formData = await ctx.req.formData();
    const token = formData.get("g-recaptcha-response")?.toString();
    const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY") as string;
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

      if (ctx.req.headers.get("accept") === "application/json") {
        if (data.success) {
          return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } else {
          console.error("web3forms submission failed:", data);
          return new Response(
            JSON.stringify({ success: false, error: "Submission failed" }),
            {
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      }

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
});
export default define.page((_ctx) => {
  const siteKey = Deno.env.get("RECAPTCHA_SITE_KEY") as string;
  return (
    <div class="flex flex-col justify-center items-center grow mt-4 mx-2 md:mx-12">
      <Head>
        <title>Harry Curtis: Contact Me</title>
      </Head>
      <div class="mockup-phone border-primary max-md:contents my-5">
        <div class="mockup-phone-camera max-md:hidden"></div>
        {/* NOTE: bg-blend class with secondary colour? */}
        <div class="mockup-phone-display max-md:contents md:bg-[url(avechenri-YGgD98icPtg-unsplash.jpg)]">
          <div class="flex flex-col gap-4 justify-end w-full h-full">
            <div class="chat chat-start px-1">
              <div class="chat-header ">
                Harry Curtis
                <time class="text-xs opacity-50">2 hours ago</time>
              </div>
              <div class="chat-bubble py-4 text-lg md:bg-primary md:text-primary-content">
                <p>Hey! Thanks for taking the time to visit the site.</p>
              </div>
            </div>
            <div class="chat chat-start px-1">
              <div class="chat-header">
                Harry Curtis
                <time class="text-xs opacity-50">2 hours ago</time>
              </div>
              <div class="chat-bubble py-4 text-lg md:bg-primary md:text-primary-content">
                <p>
                  You can leave a message using the form below.
                </p>
              </div>
            </div>
            <div class="chat chat-end self-end w-full px-1">
              <ContactForm siteKey={siteKey} />
            </div>
            <div class="h-24" />
          </div>
        </div>
      </div>
    </div>
  );
});
