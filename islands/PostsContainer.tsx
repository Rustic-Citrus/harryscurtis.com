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
        aria-label={`Go to Page ${i}`}
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
          class="list bg-primary rounded-box shadow-md max-w-200"
        >
          {posts.length > 0
            ? pages[currentPage.value].map((post, key) => (
              <a
                href={`posts/${post.slug}`}
                aria-label={`Read ${post.title}`}
                key={key}
                class="group"
              >
                <li class="list-row hover:shadow-sm transition-shadow">
                  <div>
                    <div class="text-lg group-hover:text-info transition-colors">
                      {post.title}
                    </div>
                    <div class="text-base uppercase font-semibold opacity-60 py-1">
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
                </li>
              </a>
            ))
            : <li>No posts!</li>}
        </ul>
      </div>
      <div class="join mt-8">
        {buttons}
      </div>
    </>
  );
}
