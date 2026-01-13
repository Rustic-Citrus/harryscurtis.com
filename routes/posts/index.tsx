import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";
import { Signal, useSignal } from "@preact/signals";
import { getPosts } from "../../utils/posts.ts";
import PostsPagination from "../../islands/PostsPagination.tsx";
import PostsList from "../../islands/PostsList.tsx";
import { Post } from "../../types.ts";

export default define.page(async function PostsIndex() {
  const currentPageSignal: Signal<number> = useSignal(0);
  const posts: Post[] = await getPosts();
  const postsPerPage = 10;
  const pages: Post[][] = [];
  for (let i = 0; i < posts.length; i += postsPerPage) {
    pages.push(posts.slice(i, i + postsPerPage));
  }

  return (
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <Head>
        <title>Posts by Harry Curtis</title>
      </Head>
      {/* <PostsList pages={pages} currentPageSignal={currentPageSignal} /> */}
      {/* <PostsPagination */}
      {/*   pageCount={pages.length} */}
      {/*   currentPageSignal={currentPageSignal} */}
      {/* /> */}
    </div>
  );
});
