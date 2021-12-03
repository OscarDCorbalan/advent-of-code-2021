const fs = require("fs");

const input = fs.readFileSync("2/input", "utf8").split("\n").filter(Boolean);

const commands = input
  .map((command) => command.split(" "))
  .map(([direction, value]) => ({
    direction,
    value: Number(value)
  }));

let position = 0;
let depth = 0;
let aim = 0;

commands.forEach(({ direction, value }) => {
  switch (direction) {
    case "forward":
      position += value;
      depth += value * aim;
      break;
    case "up":
      aim -= value;
      break;
    case "down":
      aim += value;
      break;
    default:
  }
});

const result = position * depth;
console.log(
  `Day2 Part1: position=[${position}] depth=[${depth}] total=[${result}]`
);
