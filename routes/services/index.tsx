import { define } from "../../utils.ts";
import ServicesCard from "../../components/ServicesCard.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 px-6 my-6">
      <ServicesCard
        imageUrl="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
        imageAlt="A photo of a computer monitor with lines of code on the screen."
        imageTitle="Photo by Mohammad Rahmani on Unsplash"
        cardTitle="Software Engineering Projects"
        cardBodyText="Software engineering means the design and development of applications. It necessarily involves a substantial amount of communication with the client to understand their needs, followed by the planning, and execution of the project. Requisitioning a software developer is most useful when you can't find the software to meet your specific requirements."
        cardListItems={[
          "An inventory database and management application for a second-hand bookshop.",
          "A bespoke online forum for a community.",
          "A website with an online shop for a clothes retailer.",
        ]}
      />
      <ServicesCard
        imageUrl="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
        imageAlt="Photo by Daria Nepriakhina on Unsplash"
        imageTitle=""
        cardTitle="Digital Transformation Projects"
        cardBodyText="Digital transformation is the process of converting analogue into digital systems. Often, this involves making procedural tasks automated, saving you and your business time."
        cardListItems={[
          "",
          "",
          "",
        ]}
      />
      <ServicesCard
        imageUrl="freestocks-I_pOqP6kCOI-unsplash.jpg"
        imageAlt="Photo by freestocks on Unsplash"
        imageTitle=""
        cardTitle="Digital Transformation Projects"
        cardBodyText="Digital transformation is the process of converting analogue into digital systems. Often, this involves making procedural tasks automated, saving you and your business time."
        cardListItems={[
          "",
          "",
          "",
        ]}
      />
    </div>
  );
});
