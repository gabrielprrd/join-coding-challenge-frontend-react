import { convertUnixToDateString } from ".";

describe("convertUnixToDateString", () => {
  test("should convert UNIX timestamp to date string", () => {
    const unixTimestamp = 1630454400;
    const expectedDateString = "Sep 1, 2021";
    expect(convertUnixToDateString(unixTimestamp)).toBe(expectedDateString);
  });

  test("should handle negative UNIX timestamps", () => {
    const unixTimestamp = -3600;
    const expectedDateString = "Jan 1, 1970";
    expect(convertUnixToDateString(unixTimestamp)).toBe(expectedDateString);
  });

  test("should handle zero UNIX timestamp", () => {
    const unixTimestamp = 0;
    const expectedDateString = "Jan 1, 1970";
    expect(convertUnixToDateString(unixTimestamp)).toBe(expectedDateString);
  });

  test("should handle fractional UNIX timestamps", () => {
    const unixTimestamp = 0.5;
    const expectedDateString = "Jan 1, 1970";
    expect(convertUnixToDateString(unixTimestamp)).toBe(expectedDateString);
  });

  test("should handle large UNIX timestamps", () => {
    const unixTimestamp = 2147483647;
    const expectedDateString = "Jan 19, 2038";
    expect(convertUnixToDateString(unixTimestamp)).toBe(expectedDateString);
  });

  test("should handle invalid input", () => {
    const invalidInput = "not_a_number";
    const expectedDateString = "Invalid Date";
    expect(convertUnixToDateString(invalidInput as any)).toBe(
      expectedDateString
    );
  });
});
