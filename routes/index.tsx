import { FeaturedPosts } from "../components/FeaturedPosts.tsx";
import posts from "../dummy/posts.json" with { type: "json" };

export default function Home() {
  return (
    <div class="flex flex-col lg:flex-row justify-center gap-4">
      <div class="flex flex-col gap-2 justify-left lg:max-w-1/2 m-5 text-primary-content">
        <h1 class="text-3xl pt-10">
          Learning in public
        </h1>
        <h2 class="text-xl">Harry Curtis</h2>
        <p class="text-lg">
          Welcome to a place where I share my experiences of learning about
          stuff that I find interesting, and things that I've made which I
          usually end up looking back on with horror.
        </p>
        <p>
          You can also send me a message through the{" "}
          <a href="/contact" class="text-primary">contact page</a>.
        </p>
      </div>
      <div class="flex flex-col justify-center m-2">
        <h1 class="text-2xl">Featured notes</h1>
        <FeaturedPosts item={posts.slice(0, 3)} />
      </div>
    </div>
  );
}
