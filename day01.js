import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log('--- Day01 ---');

const inputText = readFileSync('./inputs/day01.txt', {encoding:'utf8'});
// const inputText = `
// 199
// 200
// 208
// 210
// 200
// 207
// 240
// 269
// 260
// 263
// `; // test input

function parseInput(inputText) {
  return inputText.trim()
		.split('\n')
		.map(str => parseInt(str));
}

function solve1(measures) {
  return measures
		.filter((measure, i) => measure > measures[i - 1])
		.length;
}

function solve2(measures) {
  return measures
		.map((measure, i) => measure + measures[i-1] + measures[i-2])
		.filter((window, i, windows) => window > windows[i - 1])
		.length;
}

const input = parseInput(inputText);
const solution1 = solve1(input); // Solution 1
console.log('solution 1:', solution1);
const solution2 = solve2(input); // Solution 2
console.log('solution 2:', solution2);
console.timeEnd('✨ Done in');