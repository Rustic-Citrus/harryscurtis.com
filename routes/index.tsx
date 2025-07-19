import { FeaturedPosts } from "../components/FeaturedPosts.tsx";
import posts from "../dummy/posts.json" with { type: "json" };

export default function Home() {
  return (
    <div class="flex flex-col lg:flex-row justify-center gap-4">
      <div class="flex flex-col gap-2 justify-center m-2">
        <h1 class="text-3xl">
          Learning in public
        </h1>
        <h2 class="text-xl">Harry Curtis</h2>
        <p class="px-10">
          Welcome to a place where I share my experiences of learning about
          stuff that I find interesting, and things that I've made which I
          usually end up looking back on with horror.
        </p>
        <small>PS The "S" is for "Stuart".</small>
      </div>
      <div class="flex flex-col justify-center m-2 max-w-full xl:max-w-1/2">
        <h1 class="text-2xl">Featured notes</h1>
        <FeaturedPosts item={posts.slice(0, 3)} />
      </div>
    </div>
  );
}
