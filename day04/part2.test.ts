import {assertEquals} from "@std/assert/equals";
import {readInput} from "./part1.ts";
import {findAccessibleRollsRecursive} from "./part2.ts";

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

Deno.test('test example part2 works', () => {
    const rows = readInput(input);
    const total = findAccessibleRollsRecursive(rows)

    assertEquals(total, 43);
})