import { InformationCardProps } from "../types/index.ts";

export const InformationCard = (
  { type, title, body, buttons }: InformationCardProps,
) => {
  return (
    <div class="card w-96 bg-accent text-accent-content card-lg shadow-sm h-fit">
      <div class={`badge badge-${type} absolute -right-2 -top-2`}>
        <svg
          class="size-[1em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="currentColor"
            stroke-linejoin="miter"
            stroke-linecap="butt"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            >
            </circle>
            <polyline
              points="7 13 10 16 17 8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            >
            </polyline>
          </g>
        </svg>
        {type[0].toUpperCase() + type.slice(1, type.length)}
      </div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {body}
        {typeof body === "string" ? <p>{body}</p> : body.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
        <div class="justify-end card-actions">
          {buttons ?? ""}
        </div>
      </div>
    </div>
  );
};
