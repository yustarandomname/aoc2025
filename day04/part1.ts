export function splitInRows(input: string): number[][] {
  return input
    .trim()
    .split('\n')
    .map((line) =>
      line
        .trim()
        .split('')
        .map((char) => (char === '@' ? 1 : 0))
    );
}

export function readInput(input: string): number[][] {
  const split = splitInRows(input);

  // Apply padding
  const width = split[0].length;
  const paddingRow = new Array(width).fill(0);
  split.unshift(paddingRow);
  split.push([...paddingRow]);

  for (let i = 0; i < split.length; i++) {
    split[i].unshift(0);
    split[i].push(0);
  }

  return split;
}

export function accessibleRolls(
    rowBefore: number[],
    thisRow: number[],
    nextRow: number[]
): number {
    let total = 0;

    for (let i = 1; i < thisRow.length; i++) {
        const digit = thisRow[i];
        if (digit == 0) continue;

        // Sum the neighbouring 8 cells
        const neighbours = rowBefore[i - 1] + rowBefore[i] + rowBefore[i + 1] + thisRow[i-1] + thisRow[i+1] + nextRow[i-1] + nextRow[i] + nextRow[i + 1];

        if (neighbours < 4) total++;
    }

    return total;
}

export function part1(): number {
    const input = Deno.readTextFileSync('day04/input.txt');
    const rows = readInput(input);

    let total = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const rowBefore = rows[i - 1];
        const thisRow = rows[i];
        const nextRow = rows[i + 1];
        total += accessibleRolls(rowBefore, thisRow, nextRow);
    }

    return total;
}
