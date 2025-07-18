import { PageProps } from "$fresh/server.ts";
import { Post } from "../types/index.ts";

export const FeaturedPostsCarousel = (props: PageProps<Post[]>) => {
  return (
    <div class="carousel carousel-center rounded-box">
      {props.data.map((post, index) => {
        return (
          <div class="carousel-item">
            <div class="card w-96 bg-base-100 card-xl shadow-sm">
              <div class="card-body">
                <h2 class="card-title">{post.title}</h2>
                <p>
                  {post.summary}
                </p>
                <div class="justify-end card-actions">
                  <button class="btn btn-primary" href={post.link}>Read</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
