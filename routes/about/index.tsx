import { define } from "../../utils.ts";
import { Head } from "fresh/runtime";

export default define.page((_ctx) => {
  return (
    <div class="flex flex-col grow">
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </div>
  );
});
