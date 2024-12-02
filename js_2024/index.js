const fs = require("fs");

function setup() {
    const day = parseInt(process.argv[2]);
    if (isNaN(day)) {
        throw new Error(`Expected day to be number got: ${process.argv[2]}`);
    }
    const file = process.argv[3] ?? "example";
    const inputBuffer = fs.readFileSync(`inputs/day${day}/${file}.txt`);
    return {
        day: day,
        input: inputBuffer.toString()
    }
}

async function runner(runnerInfo) {
    try {
        const jsFilePath = `./src/day${runnerInfo.day}/solution.js`;
        const solution = await import(jsFilePath);

        if ("part1" in solution) {
            const ans = solution.part1(runnerInfo.input);
            console.log("Part 1: ", ans);
        }
        if ("part2" in solution) {
            const ans = solution.part2(runnerInfo.input);
            console.log("Part 2: ", ans);
        }
    } catch (err) {
        console.error(err);
    }
}

runner(setup());

