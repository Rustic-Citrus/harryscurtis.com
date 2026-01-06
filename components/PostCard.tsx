import { Post } from "../types.ts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div class="card card-md shadow-sm bg-base-100 border-2 border-base-content/20 w-full hover:border-base-content/40 hover:shadow-md transition-colors max-w-md h-64">
      <div class="card-body">
        <a href={`/posts/${post.slug}`} class="group">
          <h2 class="card-title text-2xl font-bold group-hover:text-info transition-colors">
            {post.title}
          </h2>
          <div class="card-subtitle text-base-content/80 mt-2">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <p class="card-text mt-4 text-base-content">
            {post.snippet.length > 250
              ? `${post.snippet.slice(0, 250)}...`
              : post.snippet}
          </p>
        </a>
      </div>
    </div>
  );
}
