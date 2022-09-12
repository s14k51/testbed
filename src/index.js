const isBoolean = require("lodash/isBoolean");

const str = "hello";

function sayX() {
  const x = 1;
  const y = 2;
  const z = 5;

  for (const x of [1, 2, 3]) {
    console.log(x);
  }

  if (x && y && z) {
    console.log("ello");
  }

  return true ? x : isBoolean(x, 2);
}
