import { readInput } from './part1.ts';

const REQUEST_LENGTH = 12;

export function largestPowerValuePart2Attempt2(
  bank: number[],
  assumed: number[]
): number {
  if (bank.length === 0) {
    return Number(assumed.join(''));
  }

  const tryLast = bank[bank.length - 1];
  let best = Number(assumed.join(''));

  for (let i = 0; i < assumed.length; i++) {
    const candidate = [...assumed];
    candidate.splice(i, 1); // remove ith

    candidate.unshift(tryLast); // add tryLast at the front

    const candidateValue = Number(candidate.join(''));
    best = Math.max(best, candidateValue);
  }

  const recursiveBest = largestPowerValuePart2Attempt2(
    bank.slice(0, bank.length - 1),
    best.toString().split('').map(Number)
  );

  return Math.max(best, recursiveBest);
}

export function largestPowerValuePart2(bank: number[]): number {
  // Take the last REQUEST_LENGTH digits as the initial assumption
  const attempt = bank.slice(0, bank.length - REQUEST_LENGTH);
  const assumed = bank.slice(-REQUEST_LENGTH);
  return largestPowerValuePart2Attempt2(attempt, assumed);
}

export function part2(): number {
  const banks = readInput(Deno.readTextFileSync('day03/input.txt'));

  const values = banks.map((bank) => largestPowerValuePart2(bank));
  return values.reduce((a, b) => a + b, 0);
}
