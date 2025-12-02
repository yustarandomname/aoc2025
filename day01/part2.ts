import {readInput} from "./part1.ts";

export function calculatePositionPartTwo(inputs: number[]) {


        let passesZero = 0;
        let position = 50;
        for (const move of inputs) {
            const prevPosition = position;
            position += move;

            if (position === 0) {
                passesZero++;
            } else if (position < 0) {
                if (prevPosition === 0) {
                    passesZero -= 1;
                }
                while (position < 0) {
                    position += 100;
                    passesZero++;
                }
                if (position === 0) {
                    passesZero++;
                }
            } else if (position >= 100) {
                while (position >= 100) {
                    position -= 100;
                    passesZero++;
                }
            }
        }
        return passesZero;
}

export function part2(): number {
    const inputs = readInput('day01/input.txt');

    return calculatePositionPartTwo(inputs);
}