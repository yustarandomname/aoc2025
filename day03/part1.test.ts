import { assertEquals } from '@std/assert/equals';
import { largestPowerValue } from './part1.ts';

Deno.test('Largest power value', () => {
  assertEquals(largestPowerValue('987654321111111'.split('').map(Number)), 98);

  assertEquals(largestPowerValue('811111111111119'.split('').map(Number)), 89);

  assertEquals(largestPowerValue('234234234234278'.split('').map(Number)), 78);

  assertEquals(largestPowerValue('818181911112111'.split('').map(Number)), 92);
});
