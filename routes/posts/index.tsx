import { Head } from "fresh/runtime";
import { PostsPagination } from "../../islands/PostsPagination.tsx";
import { define } from "../../utils.ts";

export default define.page((_ctx) => {
  return (
    <div class="flex grow flex-col gap-2">
      <Head>
        <title>Posts</title>
      </Head>
      <h1 class="pt-4 text-3xl">Posts</h1>
      <label class="input">
        <svg
          class="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Search" />
      </label>
      <PostsPagination />
    </div>
  );
});
