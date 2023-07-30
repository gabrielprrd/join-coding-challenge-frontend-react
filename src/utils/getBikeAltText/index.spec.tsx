import { getBikeAltText } from ".";

describe("getBikeAltText", () => {
  const testData = [
    {
      image: "image-url.jpg",
      frameMode: "Frame1",
      expected: "Frame1",
    },
    {
      image: "image-url.jpg",
      frameMode: "Frame2",
      expected: "Frame2",
    },
    {
      image: "image-url.jpg",
      frameMode: undefined,
      expected: "Bike",
    },
    // Test cases with undefined image
    {
      image: undefined,
      frameMode: "Frame1",
      expected: "No image available",
    },
    {
      image: undefined,
      frameMode: undefined,
      expected: "No image available",
    },
  ];

  testData.forEach(({ image, frameMode, expected }) => {
    it(`should return "${expected}" when image is "${image}" and frameMode is "${frameMode}"`, () => {
      const result = getBikeAltText(image, frameMode);
      expect(result).toBe(expected);
    });
  });
});
