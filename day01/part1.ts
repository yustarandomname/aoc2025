export type Input = `R${number}` | `L${number}`;

export function readInput(filePath: string): number[] {
  const fs = Deno.readTextFileSync(filePath);

  const lines = fs.trim().split('\n');
  if (lines.length === 0) {
    return [];
  }

  // Convert each line to the Input type
  return lines
    .map((line) => {
      const match = line.match(/^([RL])(\d+)$/);
      if (match) {
        return `${match[1]}${parseInt(match[2], 10)}` as Input;
      }
      throw new Error(`Invalid input format: ${line}`);
    })
    .filter((line) => line !== undefined)
    .map(cmd => Number(cmd.slice(1)) * (cmd[0] === "L" ? -1 : 1));
}

export function calculatePosition(input: number[]): number {
  let pos = 50;
  let zeros = 0;

  for (const command of input) {
    // If right turn
      pos -= command;
      pos = (pos + 100) % 100;

    if (pos == 0) {
      zeros++;
    }
  }

  return zeros;
}

export function part1(): number {
  const inputs = readInput('day01/input.txt');

  return calculatePosition(inputs);
}
