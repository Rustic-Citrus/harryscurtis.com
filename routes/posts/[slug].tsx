import { define } from "@/utils.ts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default define.page(function BlogPost(ctx) {
  if (!ctx.state.post) {
    return <div class="text-lg">Post not found.</div>;
  }
  return (
    <div class="flex flex-col grow px-4 py-8 mx-auto md:max-w-4xl w-full">
      <div class="mb-8">
        <a
          href="/posts"
          class="text-info-content hover:text-info hover:underline transition-colors"
        >
          &larr; Back to Posts
        </a>
      </div>
      <h1 class="text-5xl font-bold mb-4">{ctx.state.post.title}</h1>
      <div class="text-base-content mb-8">
        {new Date(ctx.state.post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div class="prose md:prose-lg">
        <Markdown
          remarkPlugins={[remarkGfm]}
        >
          {ctx.state.post.content}
        </Markdown>
      </div>
    </div>
  );
});
