import { Post } from "../types.ts";
import { appendEllipsisToParagraph, elideParagraph } from "../utils.ts";

interface TopPostCardProps {
  post: Post;
}

export default function TopPostCard({ post }: TopPostCardProps) {
  const maxTopPostSnippetLength = 128;

  const sanitisedSnippet = post.snippet.length > maxTopPostSnippetLength
    ? appendEllipsisToParagraph(
      elideParagraph(post.snippet, maxTopPostSnippetLength),
    )
    : post.snippet;

  return (
    <a
      href={`/posts/${post.slug}`}
      class="group my-12 mx-2 cursor-pointer motion-safe:hover-3d motion-safe:transform-gpu motion-safe:will-change-transform"
    >
      <div class="card bg-base-100 border-2 border-base-content/20 h-64 max-w-md">
        <div class="card-body w-full motion-safe:md:backface-hidden">
          <h2 class="card-title text-2xl font-bold">
            {post.title}
          </h2>
          <div class="card-subtitle text-base mt-2">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <p class="card-text mt-4 text-sm sm:text-base">{sanitisedSnippet}</p>
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
