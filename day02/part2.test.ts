import {assertEquals} from '@std/assert/equals';
import {isInvalidNumber, parseInput} from './part1.ts';
import {isInvalidNumberPart2} from './part2.ts';

Deno.test('Is valid number part two', () => {
  assertEquals(isInvalidNumberPart2(11), true);
  assertEquals(isInvalidNumberPart2(111111111), true);
  assertEquals(
    isInvalidNumberPart2(123456),
    false,
    `${isInvalidNumberPart2(123456)}`
  );
  assertEquals(isInvalidNumberPart2(112112), true);
  assertEquals(isInvalidNumberPart2(123123), true);
  assertEquals(isInvalidNumberPart2(11111111), true);
  assertEquals(isInvalidNumberPart2(1188511885), true);
  assertEquals(isInvalidNumberPart2(9967899678), true);
});

Deno.test('Part two should at least find part one', () => {
  const fs = Deno.readTextFileSync('day02/input.txt');
  const ranges = parseInput(fs.trim());

  for (const { min, max } of ranges) {
    for (let i = min; i <= max; i++) {
      const partOne = isInvalidNumber(i);
      const partTwo = isInvalidNumberPart2(i);

      if (partOne) {
        assertEquals(
          partTwo,
          true,
          `Number ${i} is invalid in part one but not in part two`
        );
      }
    }
  }
});
