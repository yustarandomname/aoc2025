import { part1 } from './day05/part1.ts';
import { part2 } from './day05/part2.ts';

if (import.meta.main) {
  const part_one = part1();
  const part_two = part2();

  console.log({ part_one, part_two });
}
