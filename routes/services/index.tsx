import { define } from "../../utils.ts";
import ServicesCard from "../../components/ServicesCard.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 px-6 my-6">
      <ServicesCard
        imageUrl="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
        imageAlt="A photo of a computer monitor with lines of code on the screen."
        imageTitle="Photo by Mohammad Rahmani on Unsplash"
        cardTitle="Software Development"
        cardBodyText="As a Software Engineer, I have a strong understanding of best design principles, and have designed a number of applications from the ground up, including this website, and an application to assist English teachers plan their lessons. With the rate of technological advancement seeming to accelerate every day, many businesses are at risk of being left behind if they don't have the right digital tools to carry out their work. But with the right software, your business can take advantage of these enormous changes that are happening and grow with the technology, rather than in spite of it."
      />
      <ServicesCard
        imageUrl="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
        imageAlt="Photo by Daria Nepriakhina on Unsplash"
        imageTitle=""
        cardTitle="Digital Transformation Projects"
        cardBodyText="Digital transformation is the process of converting analogue into digital systems. Often, this involves making procedural tasks automated, saving you and your business time."
      />
      <ServicesCard
        imageUrl="freestocks-I_pOqP6kCOI-unsplash.jpg"
        imageAlt="Photo by freestocks on Unsplash"
        imageTitle=""
        cardTitle="Mentoring"
        cardBodyText=""
      />
    </div>
  );
});
