import { CardProps } from "../types/index.ts";

export const Card = ({ item }: CardProps) => {
  return (
    <div class="card w-72 bg-base-100 card-xl shadow-lg">
      <div class="card-body">
        <h2 class="card-title">{item.title ?? ""}</h2>
        <p>
          {item.summary ?? ""}
        </p>
        <div class="justify-end card-actions">
          <button
            type="button"
            class="btn btn-primary"
            href={item.link ?? ""}
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};
