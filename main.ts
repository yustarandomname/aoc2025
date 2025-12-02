import { part1 } from './day02/part1.ts';
import { part2 } from './day02/part2.ts';

const part_one = part1();
const part_two = part2();

if (import.meta.main) {
    console.log({ part_one, part_two });
}

