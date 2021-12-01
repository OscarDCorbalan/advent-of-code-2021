var fs = require("fs");

const isDepthLargerThanPrevious = (depth, index, array) => {
  if (index === 0) {
    return false;
  }

  return depth > array[index - 1];
};

fs.readFile("input", (err, input) => {
  if (err) {
    throw err;
  }

  const depths = input.toString().split("\n").map(Number);

  console.log(depths.filter(isDepthLargerThanPrevious).length);
});
