import { Range, readInput } from './part1.ts';

export function indecesInRange(ranges: Range[]): number {
  let indecesCount = 0;

  let maxEncounted = -1;
  for (const range of ranges) {
    if (maxEncounted >= range.min) {
      // overlap

      if (range.max > maxEncounted) {
        indecesCount += range.max - maxEncounted;
        maxEncounted = range.max;
      }

      // else fully contained, do nothing
    } else {
      // no overlap
      maxEncounted = range.max;

      indecesCount += range.max - range.min + 1;
    }
  }

  return indecesCount;
}

export function part2(): number {
  const input = Deno.readTextFileSync('./day05/input.txt');
  const { ranges } = readInput(input);

  return indecesInRange(ranges);
}
