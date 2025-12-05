import { assertEquals } from '@std/assert/equals';
import { Index, indexInAnyRange } from './part1.ts';

const ranges = [
  { min: 3, max: 5 },
  { min: 10, max: 14 },
  { min: 12, max: 18 },
  { min: 16, max: 20 },
];

// Example 8:
// 8 > max(5) ->

Deno.test('indexInAnyRange', () => {
  assertEquals(indexInAnyRange(1 as Index, ranges), false);
  assertEquals(indexInAnyRange(5 as Index, ranges), true);
  assertEquals(indexInAnyRange(8 as Index, ranges), false);
  assertEquals(indexInAnyRange(11 as Index, ranges), true);
  assertEquals(indexInAnyRange(17 as Index, ranges), true);
  assertEquals(indexInAnyRange(32 as Index, ranges), false);
});
