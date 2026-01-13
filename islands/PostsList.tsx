import { Post } from "../types.ts";
import { currentPageInPosts } from "../utils/state.ts";
import PostsPage from "../components/PostsPage.tsx";

interface PostsList {
  pages: Post[][];
}

export default function PostsList({ pages }: PostsList) {
  const currentPage = pages[currentPageInPosts.value];

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PostsPage page={currentPage} key={currentPageInPosts.value} />
    </div>
  );
}
