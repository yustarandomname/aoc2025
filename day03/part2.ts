import { readInput } from './part1.ts';

const REQUEST_LENGTH = 12;

export function largestPowerValuePart2Attempt2(
  bank: number[],
  assumed: number
): number {
  if (bank.length === 0) {
    return assumed;
  }

  const tryLast = bank[bank.length - 1]; // Take the last element to try
  let best = assumed; // Start with the current assumed value
  const assumedSplit = assumed.toString().split('').map(Number);

  for (let i = 0; i < assumedSplit.length; i++) {
    const candidate = [...assumedSplit];
    candidate.splice(i, 1); // remove ith element
    candidate.unshift(tryLast); // add tryLast at the front

    const candidateValue = Number(candidate.join(''));
    best = Math.max(best, candidateValue); // Update best if candidate is better
  }

  const recursiveBest = largestPowerValuePart2Attempt2(
    bank.slice(0, bank.length - 1),
    best
  );

  return Math.max(best, recursiveBest);
}

export function largestPowerValuePart2(bank: number[]): number {
  // Take the last REQUEST_LENGTH digits as the initial assumption
  const attempt = bank.slice(0, bank.length - REQUEST_LENGTH);
  const assumed = Number(bank.slice(-REQUEST_LENGTH).join(''));
  return largestPowerValuePart2Attempt2(attempt, assumed);
}

export function part2(): number {
  const banks = readInput(Deno.readTextFileSync('day03/input.txt'));

  const values = banks.map((bank) => largestPowerValuePart2(bank));
  return values.reduce((a, b) => a + b, 0);
}
