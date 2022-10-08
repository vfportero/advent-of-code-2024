import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log('--- DayXX ---');

// const inputText = readFileSync('./inputs/dayXX.txt', {encoding:'utf8'});
const inputText = `

`; // test input

function parseInput(inputText) {
  return inputText.trim();
}

function solve1(input) {
  return input;
}

function solve2(input) {
  return input;
}

const input = parseInput(inputText);
const solution1 = solve1(input); // Solution 1
console.log('solution 1:', solution1);
// const solution2 = solve2(input); // Solution 2
// console.log('solution 2:', solution2);
console.timeEnd('✨ Done in');