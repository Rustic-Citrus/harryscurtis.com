import { FeaturedPosts } from "../components/FeaturedPosts.tsx";
import { Post } from "../types/index.ts";

const posts: Post[] = [];

export default function Home() {
  return (
    <div class="flex grow flex-col lg:flex-row justify-center gap-4 *:m-5 *:flex *:flex-col *:gap-2">
      <div class="flex justify-center lg:max-w-1/2 text-primary-content">
        <h1 class="text-4xl pt-10 font-bold pb-4">
          Curtis Digital Consultancy
        </h1>
        <h2 class="text-2xl italic">
          Providing consultation services on all things digital
        </h2>{" "}
        <p class="text-lg">
          Based in the Hay-on-Wye area, I provide consulting and support
          services for problems related to IT, Software Engineering and Data
          Analysis.
        </p>
        <p class="text-lg">
          With experience and professional qualifications in Software
          Engineering, Data Analysis and multiple programming languages, I am
          equipped to handle the vast majority of problems that individuals and
          businesses come across in their day-to-day operations. Additionally,
          with 7 years of experience as a teacher, I'm also able to provide
          assistance in IT training.
        </p>
        <p>
          If you or your business would benefit from any of these services, you
          can give me a call on 07379 555795. You can also send me a message
          through the{" "}
          <a href="/contact" class="text-secondary-content">contact page</a>.
        </p>
      </div>
      <div class="justify-center">
        <h1 class="text-3xl font-bold pb-5">Featured Posts</h1>
        <FeaturedPosts item={posts.slice(0, 3)} />
      </div>
    </div>
  );
}
