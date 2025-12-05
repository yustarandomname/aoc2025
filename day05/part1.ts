export type Range = {
  min: number;
  max: number;
};

export type Index = number & { _brand: 'Index' };

export function readInput(input: string): {
  ranges: Range[];
  indices: Index[];
} {
  const [ranges, indices] = input.split('----').map((part) => part.trim());

  const parsedRanges: Range[] = ranges.split('\n').map((line) => {
    const [min, max] = line.split('-').map(Number);
    return { min, max };
  });

  const sortedRanges = parsedRanges.sort((a, b) => a.min - b.min);

  const parsedIndices: Index[] = indices
    .split('\n')
    .map((line) => Number(line) as Index);

  return { ranges: sortedRanges, indices: parsedIndices };
}

export function isIndexInRange(index: Index, range: Range): boolean {
  return index >= range.min && index <= range.max;
}

export function indexInAnyRange(index: Index, ranges: Range[]): boolean {
  for (const range of ranges) {
    // Early exit if the range min is greater than the index
    if (range.min > index) {
      return false;
    }

    if (isIndexInRange(index, range)) {
      return true;
    }
  }
  return false;
}

export function part1(): number {
  const input = Deno.readTextFileSync('./day05/input.txt');
  const { ranges, indices } = readInput(input);

  let count = 0;
  for (const index of indices) {
    if (indexInAnyRange(index, ranges)) {
      count++;
    }
  }

  return count;
}
