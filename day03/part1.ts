export function readInput(input: string): number[][] {
    return input
        .trim()
        .split("\n")
        .map((line) => line.split("").map(Number));
}


export function largestPowerValue(bank: number[]): number {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < bank.length; i++) {
    const battery = bank[i];

    if (battery > largest) {
      if (i == bank.length - 1) {
        secondLargest = Math.max(secondLargest, battery);
        return largest * 10 + secondLargest;
      }

      secondLargest = -1;
      largest = battery;
    } else if (battery > secondLargest) {
      secondLargest = battery;
    }
  }

  return largest * 10 + secondLargest;
}

export function part1(): number {
    const banks = readInput(Deno.readTextFileSync("day03/input.txt"));
    const values = banks.map(bank => largestPowerValue(bank));
    return values.reduce((a, b) => a + b, 0);
}