import { useSignal, useComputed } from "@preact/signals";
import { Post } from "@/types.ts";

interface PostsContainerProps {
  posts: Post[];
}

export default function PostsContainer({ posts }: PostsContainerProps) {
  const POSTS_PER_PAGE = 5;
  const filters = useSignal<string[]>([]);
  const currentPage = useSignal(0);

  const tags = Array.from(new Set(posts.flatMap(post => post.tags.map(tag => tag.trim()))));

  const filteredPosts = useComputed(() => {
    if (filters.value.length === 0) return posts;
    return posts.filter((post) => {
      const cleanTags = post.tags.map((tag) => tag.trim());
      return filters.value.every((filter) => cleanTags.includes(filter))
    });
  });

  const pages = useComputed(() => {
    const chunks: Post[][] = [];
    for (let i = 0; i < filteredPosts.value.length; i += POSTS_PER_PAGE) {
      chunks.push(filteredPosts.value.slice(i, i + POSTS_PER_PAGE));
    }
    return chunks;
  });

  if (currentPage.value >= pages.value.length && pages.value.length > 0) {
    currentPage.value = 0;
  }

  const toggleFilter = (tag: string) => {
    if (filters.value.includes(tag)) {
      filters.value = filters.value.filter((t) => t !== tag);
    } else {
      filters.value = [...filters.value, tag];
    }
    currentPage.value = 0;
  };

  return (
    <>
      <div class="grid grid-cols-1 gap-8 grow items-center">
        <form onSubmit={(e) => e.preventDefault()}>
          {tags.map((tag) => (
            <input
              key={tag}
              class={`btn ${filters.value.includes(tag) ? "btn-active" : ""}`}
              type="checkbox"
              onClick={() => toggleFilter(tag)}
              aria-label={tag}
              checked={filters.value.includes(tag)}
            />
          ))}
          <input 
            class="btn btn-square" 
            type="reset" 
            value="×" 
            onClick={() => { filters.value = []; currentPage.value = 0; }} 
          />
        </form>

        <ul class="list bg-primary rounded-box shadow-md max-w-200">
          {pages.value.length > 0 ? (
            pages.value[currentPage.value]?.map((post) => (
              <a href={`posts/${post.slug}`} key={post.slug} class="group">
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
                  <p class="list-col-wrap text-base">{post.snippet}</p>
                </li>
              </a>
            ))
          ) : (
            <li class="p-4">No posts found!</li>
          )}
        </ul>
      </div>

      <div class="join mt-8">
        {pages.value.map((_, i) => (
          <button
            key={i}
            class={`join-item btn btn-primary ${currentPage.value === i ? "btn-active" : ""}`}
            onClick={() => (currentPage.value = i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
