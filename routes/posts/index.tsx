import { define } from "../../utils.ts";
import { getPosts } from "../../utils/posts.ts";

export default define.page(async function BlogIndex() {
  const posts = await getPosts();
  return (
    <div class="flex grow flex-col px-4 py-8 mx-auto md:max-w-5xl w-full">
      <h1 class="text-5xl font-bold mb-8">Posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div class="pb-8 last:border-b-0 max-w-96">
            <div class="card card-md shadow-sm border-base-content border-opacity-80">
              <a href={`/posts/${post.slug}`} class="group">
                <div class="card-body">
                  <h2 class="card-title text-2xl font-bold group-hover:text-info transition-colors">
                    {post.title}
                  </h2>
                  <div class="card-subtitle text-info-content mt-2">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <p class="card-text mt-4 text-info-content">{post.snippet}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
