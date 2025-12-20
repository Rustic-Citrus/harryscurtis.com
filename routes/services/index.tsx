import { define } from "../../utils.ts";

export default define.page(() => {
  return (
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 px-6 my-6">
      <div class="card flex-col w-5/6 bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4 lg:w-full lg:mx-0 lg:max-w-3/4 lg:min-h-xl">
        <figure class="max-h-64">
          <img
            src="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
            class="object-none shadow-lg opacity-50"
            alt="Photo by Mohammad Rahmani on Unsplash"
            title="Photo by Mohammad Rahmani on Unsplash"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">Software Engineering Projects</h2>
          <p class="py-2 text-lg">
            Software engineering means the design and development of
            applications. It necessarily involves a substantial amount of
            communication with the client to understand their needs, followed by
            the planning, and execution of the project. Requisitioning a
            software developer is most useful when you can't find the software
            to meet your specific requirements.
          </p>
          <ul class="list-inside list-disc">
            <li>
              An inventory database and management application for a second-hand
              bookshop.
            </li>
            <li>A bespoke online forum for a community.</li>
            <li>A website with an online shop for a clothes retailer.</li>
          </ul>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
      <div class="card flex-col h-full w-5/6 bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4 lg:w-full lg:mx-0 lg:max-w-3/4 lg:min-h-xl">
        <figure class="max-h-64">
          <img
            src="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
            class="object-none shadow-lg opacity-50"
            alt="Photo by Daria Nepriakhina on Unsplash"
            title="Photo by Daria Nepriakhina on Unsplash"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">Digital Transformation Projects</h2>
          <p class="py-2 text-lg">
            Digital transformation is the process of converting analogue into
            digital systems. Often, this involves making procedural tasks
            automated, saving you and your business time.
          </p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
      <div class="card flex-col h-full w-5/6 bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4 lg:w-full lg:mx-0 lg:max-w-3/4 lg:min-h-xl">
        <figure>
          <img
            src="freestocks-I_pOqP6kCOI-unsplash.jpg"
            class="shadow-lg opacity-50"
            alt="Photo by freestocks on Unsplash"
            title="Photo by freestocks on Unsplash"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl">IT Support & Diagnostics</h2>
          <p class="py-2 text-lg">
            Includes fixing malfunctioning computer hardware and software.
          </p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
});
