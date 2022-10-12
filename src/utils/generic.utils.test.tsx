import { timeDifference } from "./date.utils";
import { cutTextWithElipsis } from "./generic.utils";

describe("cut text with elipsis", () => {
  const textToTest = "Hello world!";
  test("limit is higher than length of the text", () => {
    const result = cutTextWithElipsis(textToTest, textToTest.length + 1);
    expect(result).toBe(textToTest);
  });
  test("limit is lower than length of the text", () => {
    const result = cutTextWithElipsis(textToTest, textToTest.length - 1);
    expect(result).toBe("Hello world...");
  });
  test("limit equals the length of the text", () => {
    const result = cutTextWithElipsis(textToTest, textToTest.length);
    expect(result).toBe(textToTest);
  });
});

describe("time difference util", () => {
  const timestampNow = 1664753603;
  test("1 year difference ", () => {
    expect(timeDifference(timestampNow, 1633217113)).toEqual("1 year ago");
  });
  test("2 years difference ", () => {
    expect(timeDifference(timestampNow, 1601681113)).toEqual("2 years ago");
  });
  test("month difference ", () => {
    expect(timeDifference(timestampNow, 1662161113)).toEqual("1 month ago");
  });
  test("3 months difference ", () => {
    expect(timeDifference(timestampNow, 1656804313)).toEqual("3 months ago");
  });
  test("6 hours difference ", () => {
    expect(timeDifference(1664782604, 1664761004)).toEqual("6 hours ago");
  });
  test("hour difference ", () => {
    expect(timeDifference(timestampNow, 1664750003)).toEqual("1 hour ago");
  });
  test("minute difference ", () => {
    expect(timeDifference(timestampNow, 1664753543)).toEqual("1 minute ago");
  });
  test("50 minutes difference ", () => {
    expect(timeDifference(timestampNow, 1664752403)).toEqual("20 minutes ago");
  });
  test("50 minutes difference ", () => {
    expect(timeDifference(timestampNow, 1664753593)).toEqual("Just now");
  });
});
