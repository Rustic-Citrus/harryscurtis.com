import { define } from "../utils.ts";
import { Head } from "fresh/runtime";
import FeaturedPosts from "../components/FeaturedPosts.tsx";
import { getPosts } from "../utils/posts.ts";
import { Post } from "../types.ts";

const buildFillerPost = (): Post => {
  return {
    slug: "",
    title: "More Posts Soon",
    date: new Date(),
    content: "N/A",
    snippet: "No more new posts yet. Come back soon!",
    tags: ["come", "back", "soon"],
  };
};

export default define.page(async function Home(_ctx) {
  const posts: Post[] = (await getPosts()).slice(0, 3);

  while (posts.length < 3) {
    const fillerPost = buildFillerPost();
    posts.push(fillerPost);
  }

  return (
    <div class="hero-content flex grow min-w-screen flex-col lg:flex-row align-items-center justify-items-center gap-4 *:m-5 *:flex *:flex-col *:gap-2">
      <Head>
        <title>Harry Curtis</title>
      </Head>
      <div class="flex justify-center w-full lg:w-1/3">
        <h1 class="text-4xl pt-10 font-bold pb-4">
          Harry Curtis
        </h1>
        <span class="text-rotate text-7xl">
          <span class="justify-items-left">
            <span class="text-2xl">Digital Consultant</span>
            <span class="text-2xl">Software Engineer</span>
            <span class="text-2xl">Data Analyst</span>
            <span class="text-2xl">IT Support Specialist</span>
          </span>
        </span>

        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-colors">
          <input type="radio" name="homepage-accordion" />
          {/* TODO: Shorten text for who am I section. */}
          {/* TODO: Create about route with full text. */}
          <div class="collapse-title font-semibold">
            Who am I?
          </div>
          <div class="collapse-content">
            <p class="text-justify text-sm pb-2">
              I am a self-taught tech specialist based in Mid-Wales, with
              qualifications and experience in Software Engineering, Data
              Analysis, the Java programming language, and a range of other
              technical skills. My professional focus is to help ordinary people
              and small businesses with change, such as managing the migration
              of an inventory and point-of-sale system or to find the right
              software and hardware for your requirements.
            </p>
            <p class="text-justify text-sm pb-2">
              Before I decided to become a Software Engineer, I taught English
              in the South of Brazil. I worked with children, teenagers, and
              young adults, and had a fulfilling role in their development as
              people. I taught myself Portuguese, earned a degree in Philosophy
              during the Covid-19 pandemic, and met my wife, Heloísa, who has
              now emigrated to the UK, and lives with me here, in Hay-on-Wye.
            </p>
            <p class="text-justify text-sm pb-2">
              When I find the time, I research local and family history, of
              which I keep a record at the domain{" "}
              <em>family.harryscurtis.com</em>. If you would like to view or
              contribute to the research, you are welcome to request an account
            </p>

            <a
              href="https://family.harryscurtis.com/"
              target="_blank"
              class="flex justify-center hover:cursor-pointer"
            >
              <button
                type="button"
                class="btn btn-primary text-base hover:btn-info hover:text-white"
              >
                Family History Research
              </button>
            </a>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-color">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold">
            How can I help?
          </div>
          <div class="collapse-content">
            <p class="text-sm pb-2">
              I can help with a broad range of technology-related challenges,
              from complex application development projects to everyday problems
              with mobile phones.
            </p>
            <p class="text-sm mb-4">
              For a more detailed description of the services which I can offer,
              please click the Services button below.
            </p>
            <a
              href="/services"
              class="flex justify-center hover:cursor-pointer"
            >
              <button
                class="btn btn-primary text-base hover:btn-info hover:text-white"
                type="button"
              >
                Services
              </button>
            </a>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-colors">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold">
            How can I contact you?
          </div>
          <div class="collapse-content">
            <p class="text-sm mb-4">
              If you would like to contact me for help with a problem or if you
              have any other enquiries, please use the Contact page, which you
              can find by clicking or tapping the button below.
            </p>
            <a
              href="/contact"
              class="flex justify-center hover:cursor-pointer"
            >
              <button
                class="btn btn-primary text-base hover:btn-info hover:text-white"
                type="button"
              >
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-5 w-full lg:w-2/3">
        <h1 class="text-3xl font-bold">Featured Posts</h1>
        <FeaturedPosts posts={posts} />
      </div>
    </div>
  );
});
