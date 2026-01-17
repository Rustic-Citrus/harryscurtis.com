import { Post } from "@/types.ts";
import { appendEllipsisToParagraph, elideParagraph } from "@/utils.ts";

interface PostCardProps {
  post: Post;
  maxSnippetLength: number;
}

export default function PostCard({ post, maxSnippetLength }: PostCardProps) {
  const verifiedSnippet = post.snippet.length > maxSnippetLength
    ? appendEllipsisToParagraph(elideParagraph(post.snippet, maxSnippetLength))
    : post.snippet;

  const postUrl = post.slug === "/" || post.slug === ""
    ? undefined
    : `/posts/${post.slug}`;

  return (
    <a
      href={postUrl}
      class="group w-full max-w-md p-2 hover:cursor-pointer"
      aria-label="Go to Post"
    >
      <div class="card card-md shadow-sm bg-base-100 border-2 border-base-content/20 w-full hover:border-base-content/40 hover:shadow-md transition-colors h-64">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold group-focus:text-info group-hover:text-info transition-colors">
            {post.title}
          </h2>
          <div class="card-subtitle text-base-content/80 mt-2">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <p class="card-text mt-4 text-base-content text-sm sm:text-base">
            {verifiedSnippet}
          </p>
        </div>
      </div>
    </a>
  );
}
