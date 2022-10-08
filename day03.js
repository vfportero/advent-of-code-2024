import { readFileSync } from 'fs';
console.time('✨ Done in');
console.log('--- Day03 ---');

const inputText = readFileSync('./inputs/day03.txt', {encoding:'utf8'});
// const inputText = `
// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010
// `; // test input

function parseInput(inputText) {
  return inputText.trim()
    .split('\n')
    .map(line => line.split('').map(bit => parseInt(bit)));
}

function solve1(binaries) {
  const getMostCommon = bits => {
    const oneCount = bits.filter(bit => bit === 1).length;
    const zeroCount = bits.length - oneCount;
    return oneCount > zeroCount ? 1 : 0;
  };
  const gamma = binaries[0]
    .map((_, i) => {
      const column = binaries.map(bits => bits[i]);
      return getMostCommon(column);
    });
  const epsilon = gamma
    .map(bit => bit === 1 ? 0 : 1);
  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
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