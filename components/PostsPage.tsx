import { Post } from "../types.ts";

interface PostListItemProps {
  post: Post;
  key: number;
}

const PostListItem = ({ post, key }: PostListItemProps) => {
  return (
    <li key={key} class="list-row">
      <div>
        <div>{post.title}</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          {post.date}
        </div>
      </div>
      <p class="list-col-wrap text-xs">
        {post.snippet}
      </p>
      <a href={`posts/${post.slug}`}>
        <button type="button" class="btn btn-square btn-ghost">
          Read
        </button>
      </a>
    </li>
  );
};

interface PostsPageProps {
  page: Post[];
  key: number;
}

export default function PostsPage({ page, key }: PostsPageProps) {
  return (
    <ul key={key} class="list bg-base-100 rounded-box shadow-md">
      {page.map((post, key) => <PostListItem post={post} key={key} />)}
    </ul>
  );
}
