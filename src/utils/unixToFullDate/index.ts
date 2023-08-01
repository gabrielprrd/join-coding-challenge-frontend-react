export function unixToFullDate(unixTimestamp: number) {
  return new Date(unixTimestamp * 1000).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
