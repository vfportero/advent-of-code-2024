import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log("--- DayXX ---");

const inputText = readFileSync("./inputs/day02.txt", { encoding: "utf8" });

function parseInput(inputText) {
  return inputText.split("\n").map((line) => {
    return line.split(" ").map((item) => parseInt(item));
  });
}

function isReportSafe(report, activeProblemDampener = false) {
  // A report is an array of levels
  // A report is safe when:
  // The levels are either all increasing or all decreasing.
  // Any two adjacent levels differ by at least one and at most three.

  // if activeProblemDampener is true, we can tolerate a single bad level

  const isSafe = isReportSafeInternal(report);

  if (!isSafe) {
    if (activeProblemDampener) {
      // Try to fix the report by removing a single level
      for (let i = 0; i < report.length; i++) {
        const newReport = [...report];
        newReport.splice(i, 1);
        if (isReportSafeInternal(newReport)) {
          return true;
        }
      }
    }
    return false;
  }
  return true;
}

function isReportSafeInternal(report) {
  let direction = 0; // 0: unknown, 1: increasing, -1: decreasing
  return report.every((level, index, arr) => {
    if (index === 0) return true;

    let distance = level - arr[index - 1];
    let currentDirection = distance > 0 ? 1 : -1;

    if (direction === 0) {
      direction = currentDirection;
    } else if (direction !== currentDirection) {
      return false;
    }

    const diff = Math.abs(level - arr[index - 1]);
    return diff >= 1 && diff <= 3;
  });
}

function solve1(input) {
  return input.filter((i) => isReportSafe(i, false)).length;
}

function solve2(input) {
  return input.filter((i) => isReportSafe(i, true)).length;
}


const input = parseInput(inputText);
const solution1 = solve1(input); // Solution 1
console.log('solution 1:', solution1);
const solution2 = solve2(input); // Solution 2
console.log('solution 2:', solution2);
console.timeEnd('✨ Done in');