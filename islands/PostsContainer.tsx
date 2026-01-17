import { useSignal } from "@preact/signals";
import { Post } from "@/types.ts";
// @ts-types="preact"
interface PostsContainerProps {
  posts: Post[];
}
export default function PostsContainer({ posts }: PostsContainerProps) {
  const POSTS_PER_PAGE = 5;
  const goToPage = (index: number) => {
    currentPage.value = index;
  };
  const pages = [];
  for (let i = 0; i < posts.length; i += POSTS_PER_PAGE) {
    pages.push(posts.slice(i, i + POSTS_PER_PAGE));
  }
  const currentPage = useSignal(0);
  const buttons = [];
  for (let i = 0; i < pages.length; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        class={`join-item btn btn-primary ${
          currentPage.value === i ? "btn-active" : ""
        }`}
        onClick={() => goToPage(i)}
      >
        {i + 1}
      </button>,
    );
  }
  return (
    <>
      <div class="grid grid-cols-1 gap-8 grow items-center">
        <ul
          key={currentPage.value}
          class="list bg-primary rounded-box shadow-md max-w-[800px]"
        >
          {posts.length > 0
            ? pages[currentPage.value].map((post, key) => (
              <li
                key={key}
                class="list-row hover:shadow-sm transition-shadow group"
              >
                <a href={`posts/${post.slug}`}>
                  <div>
                    <div class="text-lg group-hover:text-info transition-colors">
                      {post.title}
                    </div>
                    <div class="text-base uppercase font-semibold opacity-60">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <p class="list-col-wrap text-base">
                    {post.snippet}
                  </p>
                </a>
              </li>
            ))
            : <li>No posts!</li>}
        </ul>
      </div>
      <div class="join">
        {buttons}
      </div>
    </>
  );
}
