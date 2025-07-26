import { Head } from "$fresh/runtime.ts";
import { InformationCard } from "../../../components/InformationCard.tsx";

export default function ContactSuccess() {
  const body =
    "It looks like your message was successfully sent to my inbox. I normally reply within 48 hours. Thanks for reaching out!";
  const button = (
    <a class="btn btn-outline" href="/">
      Home
    </a>
  );

  return (
    <>
      <Head>
        <title>Success!</title>
      </Head>
      <InformationCard
        type="success"
        title="Message Sent"
        body={body}
        buttons={button}
      />
    </>
  );
}
