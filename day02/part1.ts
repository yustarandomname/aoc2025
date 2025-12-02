export function parseInput(input: string): { min: number; max: number }[] {
  const ranges = input.split(',');
  return ranges.map((range) => {
    const [minStr, maxStr] = range.split('-');
    return { min: parseInt(minStr, 10), max: parseInt(maxStr, 10) };
  });
}

export function isInvalidNumber(num: number): boolean {
  const strNum = num.toString();

  if (strNum.length % 2 !== 0) return false; // Must have even number of digits

  const leftString = strNum.slice(0, strNum.length / 2);
  const rightString = strNum.slice(strNum.length / 2);

  return leftString === rightString;
}

export function rangeInvalidNumbers(min: number, max: number): number {
  let total = 0;
  for (let i = min; i <= max; i++) {
    if (isInvalidNumber(i)) {
      total += i;
    }
  }

  return total;
}

export function part1() {
  const fs = Deno.readTextFileSync('day02/input.txt');
  const ranges = parseInput(fs.trim());
  const answer = ranges.reduce(
    (acc, { min, max }) => acc + rangeInvalidNumbers(min, max),
    0
  );

  return answer;
}
