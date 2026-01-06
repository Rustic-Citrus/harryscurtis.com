import { define } from "../../utils.ts";
import { Post } from "../../types.ts";
import { getPosts } from "../../utils/posts.ts";
import PostCard from "../../components/PostCard.tsx";

export default define.page(async function PostsIndex() {
  const posts = await getPosts();

  return (
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => PostCard({ post }))}
      </div>
    </div>
  );
});
