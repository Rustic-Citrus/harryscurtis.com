import { define } from "../../utils.ts";
import { getPosts } from "../../utils/posts.ts";

export default define.page(async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <h1 class="text-5xl font-bold mb-8">Posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
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
        ))}
      </div>
    </div>
  );
});
