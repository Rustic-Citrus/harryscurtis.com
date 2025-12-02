import { define } from "../../utils.ts";

export default define.page(() => {
  return (
    <div class="flex flex-col min-h-screen py-12 lg:py-24 gap-32">
      <div class="flex flex-row gap-6 px-6 lg:px-72">
        <img
          src="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
          class="max-w-sm mask mask-squircle shadow-2xl opacity-47"
          alt="Photo by Daria Nepriakhina on Unsplash"
          title="Photo by Daria Nepriakhina on Unsplash"
        />
        <div class="flex flex-col grow justify-center text-left">
          <h1 class="text-4xl font-bold">Digital Project Management</h1>
          <p class="py-6">
            Includes creating and designing IT projects, such as finding the
            right hardware and software products for a specific use case.
          </p>
          <div>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div class="flex flex-row-reverse gap-6 px-6 lg:px-72">
        <img
          src="freestocks-I_pOqP6kCOI-unsplash.jpg"
          class="max-w-sm mask mask-squircle shadow-2xl opacity-47"
          alt="Photo by freestocks on Unsplash"
          title="Photo by freestocks on Unsplash"
        />
        <div class="flex flex-col grow justify-center text-right">
          <h1 class="text-4xl font-bold">
            IT Support & Diagnostics
          </h1>
          <p class="py-6">
            Includes fixing malfunctioning computer hardware and software.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-6 px-6 lg:px-72">
        <img
          src="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
          class="max-w-sm mask mask-squircle shadow-2xl opacity-47"
          alt="Photo by Mohammad Rahmani on Unsplash"
          title="Photo by Mohammad Rahmani on Unsplash"
        />
        <div class="flex flex-col grow justify-center">
          <h1 class="text-4xl font-bold">
            Software Engineering
          </h1>
          <p class="py-6">
            Includes designing, developing, and testing applications for
            businesses and private individuals.
          </p>
          <div>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
});
