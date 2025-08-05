import { createElement } from "preact/src/index.d.ts";
import { type ComponentProps } from "preact";
export interface Post {
  title: string;
  date_published: string;
  summary: string;
  content: string;
  link: string;
}
export interface FeaturedPostsProps extends ComponentProps<"div"> {
  item: Post[];
}
export interface CardData {
  title?: string;
  summary?: string;
  link?: string;
  buttonText?: string;
  buttonClass?: string;
}
export interface CardProps extends ComponentProps<"div"> {
  item: CardData;
}
export interface InformationCardProps extends ComponentProps<"div"> {
  type: "success" | "error";
  title: string;
  body: string | string[];
  buttons?: createElement.JSX.Element | createElement.JSX.Element[];
}
