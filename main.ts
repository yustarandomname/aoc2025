import { part1 } from './day03/part1.ts';
import { part2 } from './day03/part2.ts';

const part_one = part1();
const part_two = part2();

if (import.meta.main) {
  console.log({ part_one, part_two });
}
