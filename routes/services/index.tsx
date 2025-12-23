import { define } from "../../utils.ts";
import ServicesCard from "../../components/ServicesCard.tsx";
import CertificationBadge from "../../components/CertificationBadge.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col justify-around mx-2 md:mx-0 *:mt-8 md:flex-row xl:flex-col xl:justify-center">
      <div class="flex flex-col justify-center items-center gap-4 md:mx-4 xl:gap-8 xl:flex-row xl:items-stretch xl:h-full">
        <ServicesCard
          imageUrl="mohammad-rahmani-oXlXu2qukGE-unsplash.jpg"
          imageAlt="A photo of a computer monitor with lines of code on the screen."
          imageTitle="Photo by Mohammad Rahmani on Unsplash"
          cardTitle="Software Development"
          cardBodyText="I am a Software Engineer with a strong understanding of best design principles, and several projects under my belt. With the rate of technological advancement accelerating every day, there is a widening competitive gap between businesses that embrace and businesses that resist the change. By providing the right software, I can help your business navigate these technological shifts, and grow with them, rather than in spite of them."
        />
        <ServicesCard
          imageUrl="daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
          imageAlt="A photo of a whiteboard with sticky notes."
          imageTitle="Photo by Daria Nepriakhina on Unsplash"
          cardTitle="Digital Transformation"
          cardBodyText="I have professional experience helping businesses make the change to digital systems. It can seem overwhelming to overhaul the analogue systems that businesses inherit, but the longer they're there, the more the inefficiency costs over time. Sometimes, finding the solution for your business can be as simple as getting a fresh perspective, and that's where I can help."
        />
        <ServicesCard
          imageUrl="kenny-eliason-y_6rqStQBYQ-unsplash.jpg"
          imageAlt="A middle-aged man showing a young man something on a laptop."
          imageTitle="Photo by Kenny Eliason on Unsplash"
          cardTitle="Technical Instruction"
          cardBodyText="With over 7 years of experience as a teacher, I have helped hundreds of people of all ages bridge the knowledge gap between where they were and where they wanted to be. Learning a new tool or skill can be the key to boosting your career or obtaining that qualification, but without guidance, it can feel like an unsurmountable task. As a teacher, I can help you learn, no matter the subject area."
        />
      </div>
      <div class="flex h-full pb-4 justify-center items-center align-middle gap-2 md:flex-col md:gap-8 xl:flex-row lg:pb-8">
        <CertificationBadge
          imageSrc="digital-futures-academy-engineer-badge.png"
          imageAlt="The Digital Futures Academy Certificate of Completion badge."
          certificationLink="digital-futures-certificate.pdf"
          certificationName="Digital Futures Software Engineering Academy"
        />
        <CertificationBadge
          imageSrc="java-associate-foundations-badge.png"
          imageAlt="The Oracle Java Foundations Associate certification badge."
          certificationLink="oracle-foundations-associate-certification.pdf"
          certificationName="Oracle Certified Java Foundations Associate"
        />
        <CertificationBadge
          imageSrc="google-data-analytics-badge.png"
          imageAlt="A badge showing Harry's Google Data Analytics Professional Certification."
          certificationLink="google-data-analytics-certification.pdf"
          certificationName="Google Data Analytics Professional"
        />
      </div>
    </div>
  );
});
