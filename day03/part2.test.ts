import { assertEquals } from '@std/assert/equals';
import { largestPowerValuePart2 } from './part2.ts';

Deno.test('Largest power value size 3', () => {
  assertEquals(
    largestPowerValuePart2('987654321111111'.split('').map(Number)),
    987654321111
  );

  assertEquals(
    largestPowerValuePart2('811111111111119'.split('').map(Number)),
    811111111119
  );

  assertEquals(
    largestPowerValuePart2('234234234234278'.split('').map(Number)),
    434234234278
  );

  // 234234234234274844
  // 3434343474844
  // [4]44474844
  // [4]4474844
  // [4]474844
  // [4]74844
  // 7[4]844
  // 78[4]4
  // 784

  assertEquals(
    largestPowerValuePart2('818181911112111'.split('').map(Number)),
    888911112111
  );
  // Assume 111 is the largest
  // Check if 2 + 111 we can improve => yes 211
  // check if 1 + 211 we can improve => no 121, 121, 111 are worse
  // check if 9 + 211 we can improve => yes 921, 921, 911 are better => pick 921

  // Assume 2111 is the largest
  // Check if 1 + 2111 we can improve => no 11111, 12111, 12111, 12111 are worse
});
