import { createDefine } from "fresh";

export const define = createDefine<{ theme: "rustic" | "night" }>();

class OddParagraphError extends Error {
  constructor() {
    super(
      "An odd paragraph was provided as an input; e.g. a paragraph with no full-stops before 127 characters.",
    );
  }
}

export const elideParagraph = (paragraph: string): string => {
  if (paragraph.length < 128) return paragraph; // No elision required.
  let shortenedParagraph = paragraph.slice(0, 127);
  while (
    !((shortenedParagraph.at(shortenedParagraph.length - 1))?.match(/[^\w\s]+/))
  ) {
    shortenedParagraph = shortenedParagraph.slice(
      0,
      shortenedParagraph.length - 1,
    ); // Shorten until next full-stop.
    if (shortenedParagraph.length === 1) {
      throw new OddParagraphError();
    } // Prevent infinite loop in edge cases.
  }
  return shortenedParagraph;
};

export const appendEllipsisToParagraph = (paragraph: string): string => {
  return paragraph.at(paragraph.length - 1) === " "
    ? paragraph + "…"
    : paragraph + " …";
};
