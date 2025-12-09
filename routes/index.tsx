import { define } from "../utils.ts";
import { Head } from "fresh/runtime";
import FeaturedPosts from "../islands/FeaturedPosts.tsx";
import { getPosts } from "../utils/posts.ts";

export default define.page(async function Home(_ctx) {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <div class="hero-content flex grow min-w-screen flex-col lg:flex-row align-items-center justify-items-center gap-4 *:m-5 *:flex *:flex-col *:gap-2">
      <Head>
        <title>Harry Curtis</title>
      </Head>
      <div class="flex justify-center lg:max-w-1/2">
        <h1 class="text-4xl pt-10 font-bold pb-4">
          Harry Stuart Curtis
        </h1>
        <span class="text-rotate text-7xl">
          <span class="justify-items-left">
            <span class="text-2xl">Digital Consultant</span>
            <span class="text-2xl">Software Engineer</span>
            <span class="text-2xl">Data Analyst</span>
          </span>
        </span>
        <div class="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold">
            Which services do you offer?
          </div>
          <div class="collapse-content">
            <p class="text-sm mb-4">
              I offer a range of computer hardware and software services,
              including software engineering, data analysis and basic IT
              support. For more information, click the Services button below.
            </p>
            <a
              href="/services"
              class="flex justify-end hover:cursor-pointer"
            >
              <button
                class="btn btn-primary"
                type="button"
              >
                Services
              </button>
            </a>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-300 mt-2">
          <input type="radio" name="homepage-accordion" checked />
          <div class="collapse-title font-semibold">
            Where do you provide services?
          </div>
          <div class="collapse-content text-sm">
            Based out of Hay-on-Wye, I can provide face-to-face services to
            clients in Powys, Herefordshire and Monmouthshire. For consultation
            services, I can also provide advice over the phone or video call.
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold">
            How can I contact you?
          </div>
          <div class="collapse-content">
            <p class="text-sm mb-4">
              To arrange a consultation or to enquire about my services, please
              contact me using the contact form, accessible through the button
              below.
            </p>
            <a
              href="/contact"
              class="flex justify-end hover:cursor-pointer"
            >
              <button
                class="btn btn-primary"
                type="button"
              >
                Contact Form
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-5 w-full">
        <h1 class="text-3xl font-bold">Featured Posts</h1>
        <FeaturedPosts posts={posts} />
      </div>
    </div>
  );
});
