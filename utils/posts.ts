import { extract } from "@std/front-matter/yaml";
import { join } from "@std/path";
import { Post } from "../types.ts";

// TODO: Move getPosts to an API route.
export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  const postsDir = join(Deno.cwd(), "posts");

  try {
    for await (const entry of Deno.readDir(postsDir)) {
      if (entry.isFile && entry.name.endsWith(".md")) {
        const slug = entry.name.replace(".md", "");
        const post = await getPost(slug);
        if (post) {
          posts.push(post);
        }
      }
    }
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

// TODO: Move getPost to an API route.
export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(Deno.cwd(), "posts", `${slug}.md`));
  const { attrs, body } = extract<Record<string, unknown>>(text);

  return {
    slug,
    title: String(attrs.title),
    date: new Date(String(attrs.date)),
    content: body,
    snippet: String(attrs.snippet),
    tags: String(attrs.tags).split(","),
  };
}
