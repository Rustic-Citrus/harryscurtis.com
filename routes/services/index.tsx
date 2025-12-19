import { define } from "../../utils.ts";

export default define.page(() => {
  return (
    <div class="flex flex-col justify-center items-center min-h-screen gap-4 mb-12 mt-6 lg:py-12 lg:gap-24">
      <div class="card flex-col sm:flex-row w-5/6 sm:w-full bg-base-200 border border-base-content/50 transition-colors shadow-md mx-4 p-4 sm:mx-0 sm:max-w-3xl sm:min-h-xl">
        <figure class="max-h-1/3 sm:max-h-full sm:w-1/2">
          <img
            src="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
            class="w-full bg-cover m-2 shadow-lg opacity-50"
            alt="Photo by Mohammad Rahmani on Unsplash"
            title="Photo by Mohammad Rahmani on Unsplash"
          />
        </figure>
        <div class="card-body w-full sm:w-1/2">
          <h2 class="card-title text-3xl">Software Engineering</h2>
          <p class="py-2 sm:py-6 text-lg">
            Includes designing, developing, and testing applications for
            businesses and private individuals.
          </p>
          <ul>
            <li>A lesson-planning application for English teachers.</li>
          </ul>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
      <div class="card flex-col-reverse sm:flex-row w-5/6 sm:w-full glass shadow-md mx-2 sm:mx-0 sm:max-w-3xl sm:min-h-xl">
        <div class="card-body w-full sm:w-1/2">
          <h2 class="card-title text-3xl">Digital Project Management</h2>
          <p class="py-2 sm:py-6">
            Includes creating and designing IT projects, such as finding the
            right hardware and software products for a specific use case.
          </p>
          <div class="card-actions justify-end">
          </div>
        </div>
        <figure class="max-h-1/3 sm:max-h-full sm:w-1/2">
          <img
            src="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
            class="w-full mask mask-squircle m-2 shadow-lg opacity-75 max-h-5/6"
            alt="Photo by Daria Nepriakhina on Unsplash"
            title="Photo by Daria Nepriakhina on Unsplash"
          />
        </figure>
      </div>
      <div class="card flex-col sm:flex-row w-5/6 sm:w-full glass shadow-md mx-2 sm:mx-0 sm:max-w-3xl sm:min-h-xl">
        <figure class="max-h-1/3 sm:max-h-full sm:w-1/2">
          <img
            src="freestocks-I_pOqP6kCOI-unsplash.jpg"
            class="w-full mask mask-squircle m-2 shadow-lg opacity-75 max-h-5/6"
            alt="Photo by freestocks on Unsplash"
            title="Photo by freestocks on Unsplash"
          />
        </figure>
        <div class="card-body w-full sm:w-1/2">
          <h2 class="card-title text-3xl">IT Support & Diagnostics</h2>
          <p class="py-2 sm:py-6">
            Includes fixing malfunctioning computer hardware and software.
          </p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
});
