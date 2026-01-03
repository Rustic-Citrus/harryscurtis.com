import { define } from "../../utils.ts";
import ServicesCard from "../../components/ServicesCard.tsx";
import CertificationBadge from "../../components/CertificationBadge.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col justify-center mx-2 *:mt-8 md:mb-6 xl:flex-col xl:justify-center">
      <div class="text-justify self-center mx-2 xl:max-w-3/4">
        <h2 class="text-4xl font-semibold mb-6">Bridging the Digital Divide</h2>
        <p class="text-lg mb-4">
          Technology is advancing at a frighteningly fast pace. Artificial
          intelligence, 5G, Making Tax Digital, as well as a whole range of
          other changes are causing many people a great deal of anxiety.
          Consequently, many are not benefitting from these advancements.
        </p>
        <p class="text-lg mb-4">
          This is known as the <strong>Digital Divide</strong>.
        </p>
        <div class="collapse collapse-plus mb-4 bg-base-100 border border-base-300">
          <input type="radio" name="local-info-accordion" checked={false} />
          <div class="collapse-title font-semibold">
            How does the Digital Divide affect Powys and Herefordshire?
          </div>
          <div class="collapse-content text-sm">
            <p>
              Rural communities and the elderly often struggle the most to keep
              pace with changes to online governmental services. In Powys and
              Herefordshire, these groups make up a significant proportion of
              the population. While these improvements usually decrease public
              spending, the real cost is passed on to the members of the public
              in the form of a learning curve. That learning curve is too steep
              for some, and unwanted by others.
            </p>
          </div>
        </div>
        <p class="text-lg mb-4">
          I want to change that. I'm passionate about technology, but I think
          that everyone should benefit from its products, not just the wealthy,
          the young, and people in cities. With the technical aptitude and
          extensive experience as a teacher, I'm on a mission to bridge the
          Digital Divide.
        </p>
        <p class="text-lg mb-4">
          If you feel anxious or underconfident about technology, or have been
          affected by a recent change in technology, get in touch and we'll work
          through the problem together.
        </p>
        <div class="flex flex-col items-center">
          <a href="/contact" class="w-full hover:cursor-pointer sm:btn-wide">
            <button
              type="button"
              class="btn btn-neutral w-full btn-lg my-2 hover:btn-info sm:btn-wide"
            >
              ✉️ Send a Message
            </button>
          </a>
          <a
            href="tel:+44-1497-543795"
            class="w-full hover:cursor-pointer sm:btn-wide"
          >
            <button
              type="button"
              class="btn btn-neutral btn-lg w-full my-2 hover:btn-info sm:btn-wide"
            >
              ☎️ Call
            </button>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-4 md:mx-4 xl:gap-8 xl:flex-row xl:items-stretch xl:h-full">
        <ServicesCard
          cardTitle="Grow Your Business"
          cardBodyText="The Digital Divide doesn't just affect people, it impacts businesses, too. Process automation and software have made large companies more profitable and efficient, but small-to-medium businesses can struggle to adapt. If you're reading this, and you're a business owner who can relate to this, send me a message using the form above or give me a call."
        />
        <ServicesCard
          cardTitle="Get Connected"
          cardBodyText="Overhauling the analogue systems that businesses inherit seems overwhelming, but the longer they linger, the more the inefficiency accrues over time. Digital transformation provides the answer. Sometimes, finding the solution for your business is as simple as getting a fresh perspective, and that's where I facilitate the transition."
        />
        <ServicesCard
          cardTitle="Learn How to Adapt"
          cardBodyText="With over 7 years of experience as a teacher, I have helped hundreds of people of all ages bridge the knowledge gap between where they were and where they wanted to be. Learning a new tool or skill can be the key to boosting your career or obtaining that qualification, but without guidance, it can feel like an unsurmountable task. As a teacher, I can help you learn, no matter the subject area."
        />
      </div>
      <div class="flex flex-col h-full pb-4 justify-center items-center align-middle gap-2 md:gap-8 md:ml-8 xl:ml-0 lg:pb-8">
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
        <CertificationBadge
          imageSrc="ibm-agile-explorer-badge.png"
          imageAlt="A badge showing Harry's IBM Agile Explorer Certification."
          certificationLink=""
          certificationName="IBM Agile Explorer"
        />
      </div>
    </div>
  );
});
