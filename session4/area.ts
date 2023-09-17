function halfOfArea(radius: number): number {
  const p = 3.14;
  const result = p * radius + 2 * radius;

  return result;
}
console.log(halfOfArea(10));
