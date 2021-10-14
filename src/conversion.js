export function convert(value, unit) {
  if (unit === "imperial") {
    return Math.round(value);
  }
  return Math.round((value - 32) / 1.8);
}
