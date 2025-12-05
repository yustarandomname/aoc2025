import { readInput} from "./part1.ts";

export function accessibleRollsPart2(
    rowBefore: number[],
    thisRow: number[],
    nextRow: number[]
) {
    let total = 0;

    for (let i = 1; i < thisRow.length; i++) {
        const digit = thisRow[i];
        if (digit == 0) continue;

        // Sum the neighbouring 8 cells
        const neighbours = rowBefore[i - 1] + rowBefore[i] + rowBefore[i + 1] + thisRow[i-1] + thisRow[i+1] + nextRow[i-1] + nextRow[i] + nextRow[i + 1];

        if (neighbours < 4) {
            total++;
            // Remove the roll
            thisRow[i] = 0;
        }
    }

    return {total, updatedRow: thisRow};
}

export function findAccessibleRollsRecursive(rows: number[][]): number {
    let iterationTotal = 0;

    const newRows = rows.map(row => [...row]); // Deep copy

    for (let i = 1; i < rows.length - 1; i++) {
        const rowBefore = rows[i - 1];
        const thisRow = rows[i];
        const nextRow = rows[i + 1];
        const {total, updatedRow} = accessibleRollsPart2(rowBefore, thisRow, nextRow);

        iterationTotal += total;
        newRows[i] = updatedRow;
    }

    if (iterationTotal === 0) {
        return 0;
    } else {
        return iterationTotal + findAccessibleRollsRecursive(newRows);
    }
}


export function part2(): number {
    const input = Deno.readTextFileSync('day04/input.txt');
    const rows = readInput(input);

    return findAccessibleRollsRecursive(rows);
}
