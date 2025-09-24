import { Head } from "fresh/runtime";
import { InformationCard } from "../../../components/InformationCard.tsx";

export default function ContactError() {
  const bodyParagraphs = [
    "It looks like an error occurred. The message was not sent. This may be because your behaviour was classified as 'bot-like'.",
    "Feel free to try again, or return to the home page.",
  ];
  const buttons = [
    <a class="btn btn-outline" href="/" key="1">
      Home
    </a>,
    <a class="btn btn-warning btn-outline" href="/contact" key="2">
      Try Again
    </a>,
  ];

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <InformationCard
        type="error"
        title="Message Not Sent"
        body={bodyParagraphs}
        buttons={buttons}
      />
    </>
  );
}
