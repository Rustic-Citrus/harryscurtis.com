import { Post } from "../types.ts";
import PostsPage from "../components/PostsPage.tsx";
import { Signal } from "@preact/signals";

interface PostsList {
  currentPageSignal: Signal<number>;
  pages: Post[][];
}

export default function PostsList({ currentPageSignal, pages }: PostsList) {
  const currentPage = pages[currentPageSignal.value];

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PostsPage page={currentPage} key={currentPageSignal.value} />
    </div>
  );
}
