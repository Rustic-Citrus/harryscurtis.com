import { FeaturedPostsProps, Post } from "../types/index.ts";
import { Card } from "./Card.tsx";
export const FeaturedPosts = ({ item }: FeaturedPostsProps) => {
  return (
    <div class="grid grid-cols-1 grid-flow-row gap-2 sm:grid-cols-2">
      {item.map((post: Post, _index) => {
        const cardData =
          (({ title, summary, link }) => ({ title, summary, link }))(post);
        return (
          <Card
            item={cardData}
          />
        );
      })}
      <Card
        item={{
          title: "More notes",
          summary: "Click the button below to see all notes.",
          link: "/posts",
          buttonClass: "btn-outline",
          buttonText: "See more",
        }}
      />
    </div>
  );
};
