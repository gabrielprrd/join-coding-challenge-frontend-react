export function getBikeAltText(
  image: string | undefined,
  frameMode: string | undefined
) {
  if (!image) return "No image available";

  return frameMode ?? "Bike";
}
