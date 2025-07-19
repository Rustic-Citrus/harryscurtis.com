import { type ComponentProps } from "preact";

export interface Post {
    title: string;
    date_published: string;
    summary: string;
    content: string;
    link: string;
}

export interface FeaturedPostsProps extends ComponentProps<"div"> {
    item: Post[]
}

export interface CardData {
    title?: string;
    summary?: string;
    link?: string;
}

export interface CardProps extends ComponentProps<"div"> {
    item: CardData;
}