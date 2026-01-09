import { Post } from "../types.ts";
import PostCard from "../components/PostCard.tsx";
import TopPostCard from "../components/TopPostCard.tsx";

interface FeaturedPostsContainerProps {
  posts: Post[];
}

export default function FeaturedPostsContainer(
  { posts }: FeaturedPostsContainerProps,
) {
  return (
    <div class="flex flex-col grow items-center px-0 mx-0 xs:px-4 xs:mx-4 lg:items-start">
      <TopPostCard post={posts[0]} />
      {/* NOTE: Carousel on md? */}
      <div class="flex flex-col xl:flex-row gap-4">
        {posts.slice(1, 3).map((post, _index) => (
          <PostCard post={post} maxSnippetLength={128} />
        ))}
      </div>
    </div>
  );
}
