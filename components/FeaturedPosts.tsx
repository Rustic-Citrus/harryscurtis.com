import { FeaturedPostsProps, Post } from "../types/index.ts";
import { Card } from "./Card.tsx";

export const FeaturedPosts = ({ item }: FeaturedPostsProps) => {
  return (
    <div class="flex flex-wrap gap-2">
      {item.map((post: Post, _index) => {
        const cardData =
          (({ title, summary, link }) => ({ title, summary, link }))(post);
        return (
          <Card
            item={cardData}
          />
        );
      })}
      <div class="stack stack-end w-72">
        <div class="card w-72 card-xl shadow-lg">
          <div class="card-body">
            <h2 class="card-title">More notes</h2>
            <p class="text-left">Click the button below to see all notes.</p>
            <button type="button" class="btn btn-outline w-1/2" href="/posts">
              See More
            </button>
          </div>
        </div>
        <div class="card w-72 card-xl shadow-lg">
          <div class="card-body"></div>
        </div>
        <div class="card w-72 card-xl shadow-lg">
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  );
};
