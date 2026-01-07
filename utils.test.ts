import {
  assertEquals,
  assertGreaterOrEqual,
  assertLess,
  assertMatch,
  assertNotEquals,
  assertThrows,
  fail,
} from "@std/assert";
import { elideParagraph } from "./utils.ts";

const testParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, nibh id viverra pretium, sem sapien tempor sapien, et auctor orci lacus eu ante. Suspendisse pulvinar arcu ac est finibus varius. Nullam ut malesuada nisi. Quisque faucibus tincidunt justo, eu tincidunt sapien finibus ac. Ut vel tempus enim. Nullam feugiat eros nec commodo placerat. Cras varius, turpis a egestas commodo, turpis lorem tincidunt erat, quis volutpat metus mauris eget leo. Vivamus faucibus, nibh eu vehicula molestie.";
const maxLength = 128;

Deno.test("elideParagraph makes a paragraph longer than 128 characters shorter than 128 characters.", () => {
  const actualLength = elideParagraph(testParagraph, maxLength).length;
  assertLess(actualLength, maxLength, `Actual length: ${actualLength}`);
});

Deno.test("elideParagraph shortens the paragraph to the end of the last sentence before 128 characters in length.", () => {
  const newParagraph = elideParagraph(testParagraph, maxLength);
  const actualLastChar = newParagraph.at(newParagraph.length - 1);
  if (typeof actualLastChar === "undefined") fail();
  assertMatch(
    actualLastChar,
    /[^\w\s]+/,
    `Actual last character: ${actualLastChar}`,
  );
});

Deno.test("elideParagraph does not return an empty string, unless an empty string is provided as input.", () => {
  const newParagraph = elideParagraph(testParagraph, maxLength).trim();
  assertGreaterOrEqual(
    newParagraph.length,
    1,
    `Actual string length: ${newParagraph.length}`,
  );
});

Deno.test("elideParagraph throws an error when an unusually structured paragraph is provided as input; i.e. a paragraph where there is no full-stop.", () => {
  const oddParagraph =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum malesuada nibh id viverra pretium sem sapien tempor sapien et auctor orci lacus eu ante suspendisse pulvinar arcu ac est finibus varius nullam ut malesuada nisi quisque faucibus tincidunt justo eu tincidunt sapien finibus ac ut vel tempus enim nullam feugiat eros nec commodo placerat cras varius turpis a egestas commodo turpis lorem tincidunt erat quis volutpat metus mauris eget leo vivamus faucibus nibh eu vehicula molestie";

  assertThrows(() => {
    elideParagraph(oddParagraph, maxLength);
  }, `Odd paragraph: ${oddParagraph}`);
});
