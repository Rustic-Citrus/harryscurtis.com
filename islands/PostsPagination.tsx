import { currentPageInPosts } from "../utils/state.ts";

interface PostsPaginationProps {
  pageCount: number;
}

export default function PostsPagination({ pageCount }: PostsPaginationProps) {
  const buttons = [];
  for (let i = 0; i < pageCount; i++) {
    buttons.push(
      <button
        type="button"
        onClick={() => currentPageInPosts.value = i}
        class="join-item btn"
      >
        {i + 1}
      </button>,
    );
  }

  return (
    <div class="join">
      {buttons}
    </div>
  );
}
