import { define } from "@/utils.ts";
import { Head } from "fresh/runtime";
import PostsContainer from "@/islands/PostsContainer.tsx";
export default define.page(function PostsIndex(ctx) {
  const posts = ctx.state.posts;
  return (
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <Head>
        <title>Posts by Harry Curtis</title>
      </Head>
      {posts && <PostsContainer posts={posts} />}
    </div>
  );
});
