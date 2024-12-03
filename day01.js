import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log("--- DayXX ---");

const inputText = readFileSync("./inputs/day01.txt", { encoding: "utf8" });

function parseInput(inputText) {
  return inputText.split("\n").map((line) => {
    const [left, right] = line.split("   ");
    return { left: parseInt(left), right: parseInt(right) };
  });
}

function solve1(left, right) {
  // Sort input left and right values in two arrays
  const leftSorted = left.sort((a, b) => a - b);
  const rightSorted = right.sort((a, b) => a - b);

  // Find the distance between the two list of values
  let sum = 0;
  for (let i = 0; i < leftSorted.length; i++) {
    sum += Math.abs(leftSorted[i] - rightSorted[i]);
  }

  return sum;
}

function solve2(left, right) {
  // Find the number of occurences of each value in the left and right arrays
  let sum = 0;
  for (const l of left) {
    sum += right.filter((r) => r === l).length * l;
  }

  return sum;
}

const input = parseInput(inputText);
  const left = input.map((item) => item.left);
  const right = input.map((item) => item.right);

  const solution1 = solve1(left, right); // Solution 1
  console.log("solution 1:", solution1);
  const solution2 = solve2(left, right); // Solution 2
  console.log("solution 2:", solution2);
console.timeEnd('✨ Done in');