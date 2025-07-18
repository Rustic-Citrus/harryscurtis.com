import { FeaturedPostsCarousel } from "../components/FeaturedPostsCarousel.tsx";
import posts from "../dummy/posts.json" with { type: "json" };

export default function Home() {
  return (
    <div class="border-dashed border-black border-2 flex flex-col lg:flex-row justify-center">
      <div>
        <h1 class="text-3xl">
          Learning in public: Notes, tutorials and examples
        </h1>
        <h2 class="text-xl">Harry Curtis</h2>
        <p>
          Welcome to a place where I share my experiences of learning about
          stuff that I find interesting, and things that I've made which I
          usually end up looking back on with horror.
        </p>
        <small>PS The "S" is for "Stuart".</small>
      </div>
      <div class="max-w-full lg:max-w-1/2">
        <h1 class="text-2xl">Featured notes</h1>
        <div class="overflow-x-scroll">
          <FeaturedPostsCarousel data={posts.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
}
