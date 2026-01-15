import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Post } from "@/types.ts";
// @ts-types="preact"
import { JSX } from "preact";
export default function PostsContainer() {
  const posts = useSignal<Post[]>([]);
  const pages = useSignal<Post[][]>([]);
  const currentPage = useSignal(0);
  const buttons = useSignal<JSX.Element[]>([]);
  const postsPerPage = 2;
  const goToPage = (index: number) => {
    currentPage.value = index;
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const body = await response.json();
      posts.value = body;
      for (let i = 0; i < posts.value.length; i += postsPerPage) {
        pages.value.push(posts.value.slice(i, i + postsPerPage));
      }
      for (let i = 0; i < pages.value.length; i++) {
        buttons.value.push(
          <button
            key={i}
            type="button"
            class={`join-item btn ${
              currentPage.value === i ? "btn-active" : ""
            }`}
            onClick={() => goToPage(i)}
          >
            {i + 1}
          </button>,
        );
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ul
          key={currentPage.value}
          class="list bg-base-100 rounded-box shadow-md"
        >
          {posts.value.length > 0
            ? pages.value[currentPage.value].map((post, key) => (
              <li key={key} class="list-row">
                <div>
                  <div>{post.title}</div>
                  <div class="text-xs uppercase font-semibold opacity-60">
                    {post.date}
                  </div>
                </div>
                <p class="list-col-wrap text-xs">
                  {post.snippet}
                </p>
                <a href={`posts/${post.slug}`}>
                  <button type="button" class="btn btn-square btn-ghost">
                    Read
                  </button>
                </a>
              </li>
            ))
            : <li>No posts!</li>}
        </ul>
      </div>
      <div class="join">
        {buttons.value}
      </div>
    </>
  );
}
