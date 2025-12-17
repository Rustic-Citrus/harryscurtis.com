import { Post } from "../types.ts";

// TODO: Move to Components. Doesn't need to be an Island.
export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <a
        href={`/posts/${posts[0].slug}`}
        class="hover-3d my-12 mx-2 w-full cursor-pointer transform-gpu will-change-transform"
      >
        <div class="card bg-base-100 border-2 border-base-content/20 md:w-1/2 h-64 transform-3d">
          <div class="card-body w-full backface-hidden transform-[translateZ(20px)]">
            <h2 class="card-title text-2xl font-bold transition-colors">
              {posts[0].title}
            </h2>
            <div class="card-subtitle text-base mt-2">
              {new Date(posts[0].date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <p class="card-text mt-4 text-base">
              {posts[0].snippet.length > 200
                ? posts[0].snippet.slice(0, 200) + "..."
                : posts[0].snippet}
            </p>
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
      <div class="flex flex-col sm:flex-row gap-8">
        {posts.slice(1).map((post, index) => (
          <div
            key={index}
            class="card border border-base-content/20 bg-base-100 shadow-sm hover:border-base-content/40 hover:shadow-md transition-colors w-full h-64"
          >
            <div class="card-body">
              <a href={`/posts/${post.slug}`} class="group">
                <h2 class="card-title text-2xl font-bold group-hover:text-info transition-colors">
                  {post.title}
                </h2>
                <div class="card-subtitle text-base mt-2">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <p class="card-text mt-4 text-base">
                  {post.snippet.length > 200
                    ? post.snippet.slice(0, 200) + "..."
                    : post.snippet}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
