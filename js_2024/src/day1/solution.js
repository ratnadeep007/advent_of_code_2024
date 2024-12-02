const fs = require("fs");

function setup() {
    const file = process.argv[2] ?? "example";
    const inputBuffer = fs.readFileSync(`inputs/day1/${file}.txt`);
    return inputBuffer.toString();
}

function part1(inputString) {
    const input = inputString.split("\n");

    let leftSide = [];
    let rightSide = [];
    let distances = [];

    input.forEach((line) => {
        const [a, b] = line.replace(/\s+/g, " ").split(" ");
        leftSide.push(a);
        rightSide.push(b);
    });

    leftSide.sort();
    rightSide.sort();

    for (let i = 0; i < leftSide.length; i++) {
        distances.push(Math.abs(leftSide[i] - rightSide[i]));
    }

    return distances.reduce((a, b) => a + b);
}

function part2(inputString) {
    const input = inputString.split("\n");

    let similarityScores = [];
    let leftSide = [];
    let rightSide = [];

    input.forEach((line) => {
        const [a, b] = line.replace(/\s+/g, " ").split(" ");
        leftSide.push(a);
        rightSide.push(b);
    });


    leftSide.forEach(num => {
        const count = rightSide.reduce((accumulator, currentValue) => {
            return currentValue === num ? accumulator + 1 : accumulator;
        }, 0);
        similarityScores.push(num * count);
    });

    return similarityScores.reduce((acc, curr) => acc + curr, 0);
}

// const input = setup();
// part1(input);
// part2(input);

module.exports = {
    part1, part2
}