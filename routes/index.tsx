import { define } from "../utils.ts";
import { Head } from "fresh/runtime";
import FeaturedPostsContainer from "../components/FeaturedPostsContainer.tsx";
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
        <h1 class="text-4xl pt-10 font-bold pb-4 text-center lg:text-left">
          Harry Curtis
        </h1>
        <span class="text-rotate text-7xl">
          <span class="w-full flex flex-col gap-10 justify-items-center align-middle text-center lg:text-left">
            <p class="text-2xl">Digital Consultant</p>
            <p class="text-2xl">Software Engineer</p>
            <p class="text-2xl">Data Analyst</p>
            <p class="text-2xl">IT Support Specialist</p>
          </span>
        </span>

        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-colors">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold text-lg">
            Who am I?
          </div>
          <div class="collapse-content">
            <p class="text-base pb-2">
              I'm Harry, a self-taught techie based in Mid-Wales. I have
              qualifications and experience in Software Engineering, Data
              Analysis, the Java programming language, and a range of other
              technical skills. Before I made the switch to technology, I was an
              English teacher in Brazil.
            </p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-color">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold text-lg">
            What do I do?
          </div>
          <div class="collapse-content">
            <p class="text-base pb-2">
              I help people with a broad range of technology-related challenges,
              from complex application development projects to everyday problems
              with mobile phones.{" "}
              <a
                href="/services"
                class="font-bold transition-colors hover:cursor-pointer hover:text-info"
              >
                Click here to find out more about the technical services I
                offer.
              </a>
            </p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-colors">
          <input type="radio" name="homepage-accordion" />
          <div class="collapse-title font-semibold text-lg">
            How can I contact you?
          </div>
          <div class="collapse-content">
            <p class="text-base mb-4">
              If you'd like to chat, please{" "}
              <a
                href="/contact"
                class="font-bold transition-colors hover:cursor-pointer hover:text-info"
              >
                use the contacts page
              </a>{" "}
              or{" "}
              <a
                href="tel:+44-1497-543-795"
                class="font-bold transition-colors hover:cursor-pointer hover:text-info"
              >
                give me a call on 01497 543795
              </a>.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-5 w-full">
        <h1 class="text-3xl font-bold text-center lg:text-left">
          Featured Posts
        </h1>
        <FeaturedPostsContainer posts={posts} />
      </div>
    </div>
  );
});
