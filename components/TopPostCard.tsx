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
      class="group my-12 mx-2 cursor-pointer md:motion-safe:hover-3d md:motion-safe:transform-gpu md:motion-safe:will-change-transform"
    >
      <div class="card bg-primary border-2 border-base-content/20 max-md:group-focus:border-base-content/40 max-md:group-hover:border-base-content/40 max-md:transition-colors h-64 max-w-md">
        <div class="card-body w-full md:motion-safe:backface-hidden">
          <h3 class="card-title text-2xl font-bold transition-colors max-md:group-focus:text-info max-md:group-hover:text-info motion-safe:md:transition-none">
            {post.title}
          </h3>
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
