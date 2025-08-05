import { CardProps } from "../types/index.ts";
export const Card = ({ item }: CardProps) => {
  return (
    <div class="card card-xl shadow-lg">
      <div class="card-body">
        <h2 class="card-title">{item.title ?? ""}</h2>
        <p>
          {item.summary ?? ""}
        </p>
        <div class="justify-end card-actions">
          <a
            type="button"
            class={`btn ${item.buttonClass ?? "btn-primary"}`}
            href={item.link ?? ""}
          >
            {item.buttonText ?? "Read"}
          </a>
        </div>
      </div>
    </div>
  );
};
