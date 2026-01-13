import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";
import { getPosts } from "../../utils/posts.ts";
import PostsPagination from "../../islands/PostsPagination.tsx";
import PostsList from "../../islands/PostsList.tsx";

export default define.page(async function PostsIndex() {
  const posts = await getPosts();
  const postsPerPage = 10;
  const pages = [];
  for (let i = 0; i < posts.length; i += postsPerPage) {
    pages.push(posts.slice(i, i + postsPerPage));
  }

  return (
    <div class="flex grow flex-col items-center px-4 py-8 mx-auto w-full">
      <Head>
        <title>Posts by Harry Curtis</title>
      </Head>
      <PostsList pages={pages} />
      <PostsPagination pageCount={pages.length} />
    </div>
  );
});
