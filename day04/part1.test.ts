import { assertEquals } from '@std/assert/equals';
import {accessibleRolls, readInput, splitInRows} from './part1.ts';

const input = `
  ..@@.@@@@.
  @@@.@.@.@@
  @@@@@.@.@@
  @.@@@@..@.
  @@.@@@@.@@
  .@@@@@@@.@
  .@.@.@.@@@
  @.@@@.@@@@
  .@@@@@@@@.
  @.@.@@@.@.`;

Deno.test('split in rows', () => {
  const splitRows = splitInRows(input);

  assertEquals(splitRows[0], [0, 0, 1, 1, 0, 1, 1, 1, 1, 0]);
});

Deno.test('split with padding', () => {
  const paddedRows = readInput(input);

  assertEquals(paddedRows[0], new Array(paddedRows[0].length).fill(0));
  assertEquals(paddedRows.length, 12);
  assertEquals(paddedRows[0].length, 12);
});

Deno.test('test example works', () => {
    const rows = readInput(input);

    let total = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const rowBefore = rows[i - 1];
        const thisRow = rows[i];
        const nextRow = rows[i + 1];
        total += accessibleRolls(rowBefore, thisRow, nextRow);
    }

    assertEquals(total, 13);
})