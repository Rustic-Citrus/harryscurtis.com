import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";
import { Post } from "../../types.ts";
import { getPosts } from "../../utils/posts.ts";
import PostCard from "../../components/PostCard.tsx";

export default define.page(async function PostsIndex() {
  const posts = await getPosts();

  return (
    // TODO: Create pagination for posts.
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <Head>
        <title>Posts by Harry Curtis</title>
      </Head>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => PostCard({ post, maxSnippetLength: 128 }))}
      </div>
    </div>
  );
});
