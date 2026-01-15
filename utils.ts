import { createDefine } from "fresh";
import { ContextState, Post } from "@/types.ts";
import { extract } from "@std/front-matter/yaml";
import { join } from "@std/path";
export const define = createDefine<ContextState>();
class OddParagraphError extends Error {
  constructor() {
    super(
      "An odd paragraph was provided as an input; e.g. a paragraph with no full-stops before 127 characters.",
    );
  }
}
export const elideParagraph = (
  paragraph: string,
  maxLength: number,
): string => {
  if (paragraph.length < maxLength) return paragraph; // No elision required.
  let shortenedParagraph = paragraph.slice(0, maxLength - 1);
  while (
    !((shortenedParagraph.at(shortenedParagraph.length - 1))?.match(/[^\w\s]+/))
  ) {
    shortenedParagraph = shortenedParagraph.slice(
      0,
      shortenedParagraph.length - 1,
    ); // Shorten until next full-stop.
    if (shortenedParagraph.length === 1) {
      throw new OddParagraphError();
    } // Prevent infinite loop in edge cases.
  }
  return shortenedParagraph;
};
export const appendEllipsisToParagraph = (paragraph: string): string => {
  return paragraph.at(paragraph.length - 1) === " "
    ? paragraph + "…"
    : paragraph + " …";
};
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
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}
