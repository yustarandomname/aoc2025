import {assertEquals} from '@std/assert';
import {calculatePositionPartTwo} from "./part2.ts";

Deno.test('Example Test', () => {
    const input = [
        '-68',
        '-30',
        '48',
        '-5',
        '60',
        '-55',
        '-1',
        '-99',
        '14',
        '-82',
    ].map(Number);

    assertEquals(calculatePositionPartTwo(input), 6);
});

Deno.test("part2: turn to 0", () => {
    assertEquals(calculatePositionPartTwo([-50]), 1);
    assertEquals(calculatePositionPartTwo([-50, -1]), 1);
    // assertEquals(calculatePositionPartTwo([50]), 1);
    // assertEquals(calculatePositionPartTwo([50, 1]), 1);
});
