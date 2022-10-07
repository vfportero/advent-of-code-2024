import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log('--- Day02 ---');

// const inputText = readFileSync('./inputs/day02.txt', {encoding:'utf8'});
const inputText = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`; // test input

function parseInput(inputText) {
  return inputText.trim()
    .split('\n')
    .map(line => {
      const [direction, value] = line.split(' ');
      return {direction, value: parseInt(value)};
    });
}

function solve1(instructions) {
  let horizontal = 0;
  let depth = 0;
  instructions
    .forEach(({direction, value}) => {
      if (direction === 'forward') horizontal += value;
      else {
        const factor = direction === 'down' ? 1 : -1;
        return depth += factor * value;
      }
    })
  return horizontal * depth;
}

// function solve2(input) {
//   return input;
// }

const input = parseInput(inputText);

const solution1 = solve1(input);
console.log('solution 1:', solution1);

// const solution2 = solve2(input);
// console.log('solution 2:', solution2);

console.timeEnd('✨ Done in');