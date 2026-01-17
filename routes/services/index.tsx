import { define } from "@/utils.ts";
import ServicesCard from "@/components/ServicesCard.tsx";
import CertificationBadge from "@/components/CertificationBadge.tsx";

export default define.page(() => {
  return (
    <div class="flex flex-col justify-center mx-2 *:mt-8 md:mb-6 xl:flex-col xl:justify-center">
      <div class="flex flex-col justify-center items-center gap-4 md:mx-4 xl:gap-8 xl:flex-row xl:items-stretch xl:h-full">
        <ServicesCard
          cardTitle="Grow Your Business"
          cardBodyText="Unequal access to technology doesn't just affect people, it impacts businesses, too. Process automation and software have made large companies more profitable and efficient, but small-to-medium businesses can struggle to adapt. If you're reading this, and you're a business owner who can relate to this, send me a message or give me a call."
        />
        <ServicesCard
          cardTitle="Get Connected"
          cardBodyText="The internet is possibly the most revolutionary technological development so far. Yet almost 40 years after its invention, some are still struggling to connect. If you're looking for technical advice on how to best connect your home or business to the internet, I can help."
        />
        <ServicesCard
          cardTitle="Learn How to Adapt"
          cardBodyText="Technology is an area which is constantly being updated. The software you knew how to use yesterday might not be relevant tomorrow. If you're tired of feeling overwhelmed by these changes, or you want to learn how to adapt to them better, get in contact."
        />
      </div>
      <div class="flex flex-col items-center sm:flex-row sm:justify-center">
        <a
          href="/contact"
          class="w-full mx-4 hover:cursor-pointer sm:btn-wide"
          aria-label="Go to Contact Form"
        >
          <button
            type="button"
            class="flex items-center btn btn-primary font-light btn-xl w-full my-2 sm:btn-wide"
          >
            <span class="shrink">✉️</span>
            <span class="grow">
              Send a Message
            </span>
          </button>
        </a>
        <a
          href="tel:+44-1497-543795"
          class="w-full mx-4 hover:cursor-pointer sm:btn-wide"
          aria-label="Call Harry Curtis"
        >
          <button
            type="button"
            class="flex items-center btn btn-primary font-light btn-xl w-full my-2 sm:btn-wide"
          >
            <span class="shrink">
              ☎️
            </span>
            <span class="grow">
              Call
            </span>
          </button>
        </a>
      </div>

      <div class="flex flex-row h-full pb-4 justify-center items-center align-middle gap-2 md:gap-8 md:ml-8 xl:ml-0 lg:pb-8">
        <CertificationBadge
          imageSrc="digital-futures-academy-engineer-badge.png"
          imageAlt="A Digital Futures Academy Certificate of Completion badge."
          certificationLink="digital-futures-certificate.pdf"
          certificationName="Digital Futures Software Engineering Academy"
        />
        <CertificationBadge
          imageSrc="java-associate-foundations-badge.png"
          imageAlt="An Oracle Java Foundations Associate certification badge."
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
