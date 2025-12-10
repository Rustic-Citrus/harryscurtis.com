import { define } from "../../utils.ts";
import { getPost } from "../../utils/posts.ts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default define.page(async function BlogPost(ctx) {
  const post = await getPost(ctx.params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div class="flex flex-col grow px-4 py-8 mx-auto md:max-w-4xl w-full">
      <div class="mb-8">
        <a
          href="/posts"
          class="text-info-content hover:text-info hover:underline transition-colors"
        >
          &larr; Back to Blog
        </a>
      </div>
      <h1 class="text-5xl font-bold mb-4">{post.title}</h1>
      <div class="text-base-content mb-8">
        {new Date(post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <Markdown
        className="prose md:prose-lg lg:prose-xl"
        remarkPlugins={[remarkGfm]}
      >
        {post.content}
      </Markdown>
    </div>
  );
});
