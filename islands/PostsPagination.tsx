import { Signal } from "@preact/signals";

interface PostsPaginationProps {
  currentPageSignal: Signal<number>;
  pageCount: number;
}

export default function PostsPagination(
  { currentPageSignal, pageCount }: PostsPaginationProps,
) {
  const buttons = [];
  for (let i = 0; i < pageCount; i++) {
    buttons.push(
      <button
        type="button"
        onClick={() => currentPageSignal.value = i}
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
