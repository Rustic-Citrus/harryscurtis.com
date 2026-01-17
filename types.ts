export interface Post {
  slug: string;
  title: string;
  date: Date;
  content: string;
  snippet: string;
  tags: string[];
}
export interface ContextState {
  theme: "summer" | "wood";
  featuredPosts?: Post[];
  post?: Post;
  posts?: Post[];
  prefersDark?: boolean;
}
