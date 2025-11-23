import { define } from "../../utils.ts";
import { getPost } from "../../utils/posts.ts";
import { render } from "@deno/gfm";

export default define.page(async function BlogPost(ctx) {
  const post = await getPost(ctx.params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div class="px-4 py-8 mx-auto max-w-3xl">
      <div class="mb-8">
        <a href="/posts" class="text-blue-600 hover:underline">
          &larr; Back to Blog
        </a>
      </div>
      <h1 class="text-5xl font-bold mb-4">{post.title}</h1>
      <div class="text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: render(post.content) }}
      />
    </div>
  );
});
