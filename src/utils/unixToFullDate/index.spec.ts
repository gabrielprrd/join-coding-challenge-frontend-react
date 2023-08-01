import { unixToFullDate } from ".";

describe("unixToFullDate", () => {
  it("converts UNIX timestamp to date string", () => {
    const unixTimestamp = 1630454400;
    const expectedDateString = "Sep 1, 2021";
    expect(unixToFullDate(unixTimestamp)).toBe(expectedDateString);
  });

  it("handles negative UNIX timestamps", () => {
    const unixTimestamp = -3600;
    const expectedDateString = "Jan 1, 1970";
    expect(unixToFullDate(unixTimestamp)).toBe(expectedDateString);
  });

  it("handles zero UNIX timestamp", () => {
    const unixTimestamp = 0;
    const expectedDateString = "Jan 1, 1970";
    expect(unixToFullDate(unixTimestamp)).toBe(expectedDateString);
  });

  it("handles fractional UNIX timestamps", () => {
    const unixTimestamp = 0.5;
    const expectedDateString = "Jan 1, 1970";
    expect(unixToFullDate(unixTimestamp)).toBe(expectedDateString);
  });

  it("handles large UNIX timestamps", () => {
    const unixTimestamp = 2147483647;
    const expectedDateString = "Jan 19, 2038";
    expect(unixToFullDate(unixTimestamp)).toBe(expectedDateString);
  });

  it("handles invalid input", () => {
    const invalidInput = "not_a_number";
    const expectedDateString = "Invalid Date";
    expect(unixToFullDate(invalidInput as any)).toBe(expectedDateString);
  });
});
