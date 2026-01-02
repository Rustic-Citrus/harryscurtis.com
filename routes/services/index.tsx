import { define } from "../../utils.ts";
import ServicesCard from "../../components/ServicesCard.tsx";
import CertificationBadge from "../../components/CertificationBadge.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col justify-center mx-2 md:mx-0 *:mt-8 md:mb-6 md:flex-row xl:flex-col xl:justify-center">
      <div class="text-center self-center xl:max-w-3/4">
        <h2 class="text-4xl font-semibold mb-6">Bridging the Digital Divide</h2>
        <p class="text-lg mb-2">
          Technology is advancing at a frighteningly fast pace. Artificial
          intelligence, 5G, Making Tax Digital and a whole range of changes are
          making a lot of people anxious, and many are getting left behind.
        </p>
        <p class="text-lg mb-2">
          In Powys and Herefordshire, rural communities, large families, and the
          elderly are struggling to keep up with new technological government
          services. Worst of all, people in the countryside often feel ignored
          as governments and big businesses seem to spend most of their time
          talking about urban areas and urban problems. But how do you sign up
          for an online government service if you don't have an email address?
          How do you attend an online class when your brother and sister are
          next door using up the bandwidth for their classes? How do you promote
          your business on social media when you've never used Facebook or
          Instagram before?
        </p>
        <p class="text-lg mb-2">
          I want to change that. I think that everyone should benefit from the
          products of technology, not just the wealthy, the young, and people in
          cities. With extensive experience as a teacher and several credentials
          in areas of technology such as software engineering and data analysis,
          I'm on a mission to help those left out by the digital divide.
        </p>
        <p class="text-lg mb-2">
          If you're someone who feels anxious or underconfident when it comes to
          technology, then get in touch and we'll see how I can help.
        </p>
        <a href="/contact" class="hover:cursor-pointer">
          <button
            type="button"
            class="btn btn-wide btn-neutral btn-lg my-2 hover:btn-info"
          >
            Get in Touch
          </button>
        </a>
      </div>
      <div class="flex flex-col justify-center items-center gap-4 md:mx-4 xl:gap-8 xl:flex-row xl:items-stretch xl:h-full">
        <ServicesCard
          cardTitle="Grow Your Business"
          cardBodyText="Process automation and software have made businesses more profitable and more efficient."
        />
        <ServicesCard
          cardTitle="Get Connected"
          cardBodyText="Bridging the digital divide is the essence of my professional work. Overhauling the analogue systems that businesses inherit seems overwhelming, but the longer they linger, the more the inefficiency accrues over time. Digital transformation provides the answer. Sometimes, finding the solution for your business is as simple as getting a fresh perspective, and that's where I facilitate the transition."
        />
        <ServicesCard
          cardTitle="Learn How to Adapt"
          cardBodyText="With over 7 years of experience as a teacher, I have helped hundreds of people of all ages bridge the knowledge gap between where they were and where they wanted to be. Learning a new tool or skill can be the key to boosting your career or obtaining that qualification, but without guidance, it can feel like an unsurmountable task. As a teacher, I can help you learn, no matter the subject area."
        />
      </div>
      <div class="flex h-full pb-4 justify-center items-center align-middle gap-2 md:flex-col md:gap-8 md:ml-8 xl:ml-0 xl:flex-row lg:pb-8">
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
