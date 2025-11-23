import { define } from "../../utils.ts";
import { getPosts } from "../../utils/posts.ts";

export default define.page(async function BlogIndex() {
  const posts = await getPosts();
  return (
    <div class="px-4 py-8 mx-auto max-w-3xl">
      <h1 class="text-5xl font-bold mb-8">Blog</h1>
      <div class="space-y-8">
        {posts.map((post) => (
          <div class="border-b border-gray-200 pb-8 last:border-b-0">
            <a href={`/posts/${post.slug}`} class="group">
              <h2 class="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <div class="text-gray-500 mt-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <p class="mt-4 text-gray-700">{post.snippet}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});
