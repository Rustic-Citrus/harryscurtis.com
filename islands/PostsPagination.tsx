// import data from "../dummy/posts.json" with { type: "json" };
import { Card } from "../components/Card.tsx";
import { Post } from "../types/index.ts";
import { Signal, useSignal } from "@preact/signals";
const POSTS_PER_PAGE = 9;
const getPageCount = (posts: Post[], postsPerPage: number): number => {
  if (posts.length === 0) {
    return 0;
  }
  const pageCount = posts.length % postsPerPage === 0
    ? posts.length / postsPerPage
    : Math.floor(posts.length / postsPerPage) + 1;
  return pageCount;
};
const buildPage = (
  posts: Post[],
  postsPerPage: number,
  index: number,
) => {
  const start = postsPerPage * index;
  const end = postsPerPage * (index + 1) < posts.length
    ? postsPerPage * (index + 1)
    : posts.length;
  const currentPage = posts.slice(start, end);
  return currentPage;
};
const buildPages = (posts: Post[], postsPerPage: number): Post[][] => {
  const pages = [];
  const pageCount = getPageCount(posts, postsPerPage);
  if (pageCount === 0) {
    return [[]];
  }
  for (let i = 0; i < pageCount; i++) {
    const currentPage = buildPage(posts, postsPerPage, i);
    pages.push(currentPage);
  }
  return pages;
};
const incrementCurrentPage = (
  currentPageSignal: Signal,
  totalPages: number,
) => {
  return currentPageSignal.value + 1 < totalPages
    ? currentPageSignal.value++
    : undefined;
};
const decrementCurrentPage = (currentPageSignal: Signal) => {
  return currentPageSignal.value > 0 ? currentPageSignal.value-- : undefined;
};
/* TODO: Adjust the style of the pagination section so that it appears centralised.
 */

const data = [];

export const PostsPagination = () => {
  const currentPage = useSignal(0);
  const pages = buildPages(data, POSTS_PER_PAGE);
  return (
    <>
      <div class="grid grid-cols-3 gap-3">
        {pages.length === 0
          ? <>No posts were found.</>
          : pages[currentPage.value].map((post, _index) => {
            const cardData =
              (({ title, summary, link }) => ({ title, summary, link }))(post);
            return (
              <Card
                item={cardData}
              />
            );
          })}
      </div>
      <div class="join">
        <button
          class="join-item btn"
          onClick={() => decrementCurrentPage(currentPage)}
          type="button"
        >
          «
        </button>
        <button class="join-item btn" type="button">
          Page {currentPage.value + 1}
        </button>
        <button
          class="join-item btn"
          onClick={() => incrementCurrentPage(currentPage, pages.length)}
          type="button"
        >
          »
        </button>
      </div>
    </>
  );
};
