import { Post } from "../types.ts";
import PostHoverCard from "../components/PostHoverCard.tsx";

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <div>
      <PostHoverCard post={posts[0]} />
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
