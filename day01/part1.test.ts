import {assertEquals} from '@std/assert';
import {calculatePosition} from './part1.ts';

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

  assertEquals(3, calculatePosition(input));
});
