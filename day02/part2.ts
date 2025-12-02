import { parseInput } from './part1.ts';

export function isInvalidNumberPart2(num: number): boolean {
  const strNum = num.toString();

  // Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. So, 12341234 (1234 two times), 123123123 (123 three times), 1212121212 (12 five times), and 1111111 (1 seven times) are all invalid IDs.
  for (let size = 1; size <= strNum.length / 2; size++) {
    if (strNum.length % size !== 0) continue;
    const segment = strNum.slice(0, size);
    let repeated = '';
    const repeatCount = strNum.length / size;
    for (let i = 0; i < repeatCount; i++) {
      repeated += segment;
    }
    if (repeated === strNum) {
      return true;
    }
  }

  return false;
}

export function rangeInvalidNumbersPart2(min: number, max: number): number {
  let total = 0;
  for (let i = min; i <= max; i++) {
    if (isInvalidNumberPart2(i)) {
      total += i;
    }
  }

  return total;
}

export function part2() {
  const fs = Deno.readTextFileSync('day02/input.txt');
  const ranges = parseInput(fs.trim());
  const answer = ranges.reduce(
    (acc, { min, max }) => acc + rangeInvalidNumbersPart2(min, max),
    0
  );

  return answer;
}
