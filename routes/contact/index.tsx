import ContactForm from "@/islands/ContactForm.tsx";
import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";

export default define.page((_ctx) => {
  const siteKey = Deno.env.get("RECAPTCHA_SITE_KEY") as string;
  return (
    <div class="flex flex-col justify-center items-center grow mt-4 mx-2 md:mx-12">
      <Head>
        <title>Harry Curtis: Contact Me</title>
      </Head>
      <div class="mockup-phone border-primary max-md:contents my-5">
        <div class="mockup-phone-camera max-md:hidden" />
        <div class="mockup-phone-display max-md:contents md:bg-[url(avechenri-YGgD98icPtg-unsplash.jpg)]">
          <div class="flex flex-col gap-4 justify-end w-full h-full">
            <div class="chat chat-start px-1">
              <div class="chat-header ">
                Harry Curtis
                <time class="text-xs opacity-50">Just now</time>
              </div>
              <div class="chat-bubble py-4 text-lg bg-base-100 md:bg-primary md:text-primary-content">
                <p>Hey! Thanks for taking the time to visit the site.</p>
              </div>
            </div>
            <div class="chat chat-start px-1">
              <div class="chat-header">
                Harry Curtis
                <time class="text-xs opacity-50">Just now</time>
              </div>
              <div class="chat-bubble py-4 text-lg bg-base-100 md:bg-primary md:text-primary-content">
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
