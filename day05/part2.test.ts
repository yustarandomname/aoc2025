import { assertEquals } from '@std/assert/equals';
import { indecesInRange } from './part2.ts';

const ranges = [
  { min: 3, max: 5 },
  { min: 10, max: 14 },
  { min: 12, max: 18 },
  { min: 16, max: 20 },
];

// min is sorted ascending
// min = 3
// max = 5
//

Deno.test('indecesInRange', () => {
  assertEquals(indecesInRange(ranges), 14);
});
