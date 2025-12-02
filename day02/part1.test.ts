import { assertEquals } from '@std/assert';
import { isInvalidNumber, rangeInvalidNumbers } from './part1.ts';

Deno.test('Is valid number', () => {
  assertEquals(isInvalidNumber(11), true);
  assertEquals(isInvalidNumber(123456), false, `${isInvalidNumber(123456)}`);
  assertEquals(isInvalidNumber(112112), true);
  assertEquals(isInvalidNumber(123123), true);
  assertEquals(isInvalidNumber(11111111), true);
  assertEquals(isInvalidNumber(111111111), false);
  assertEquals(isInvalidNumber(1188511885), true);
});

Deno.test('range invalid number', () => {
  assertEquals(rangeInvalidNumbers(11, 22), 11 + 22);
  assertEquals(rangeInvalidNumbers(95, 115), 99);
  assertEquals(rangeInvalidNumbers(998, 1012), 1010);
});
