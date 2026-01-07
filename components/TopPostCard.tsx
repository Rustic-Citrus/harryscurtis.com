import { Post } from "../types.ts";

interface TopPostCardProps {
  post: Post;
}

export default function TopPostCard({ post }: TopPostCardProps) {
  return (
    // TODO: Edit the hover card styles so that it is a normal card on small screens.
    <a
      href={`/posts/${post.slug}`}
      class="hover-3d my-12 mx-2 w-full cursor-pointer transform-gpu will-change-transform"
    >
      <div class="card bg-base-100 border-2 border-base-content/20 md:w-1/2 h-64 transform-3d">
        <div class="card-body w-full backface-hidden transform-[translateZ(20px)]">
          <h2 class="card-title text-2xl font-bold transition-colors">
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
  );
}
