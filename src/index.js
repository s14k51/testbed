const isBoolean = require("lodash/isBoolean");

const str = "hello";

function sayX() {
  const x = 1;
  const y = 2;
  const z = 5;

  for (const x of [1, 2, 3]) {
    // 1
    console.log(x);
  }

  if (x && y) {
    // 2
    if (true) {
      // 2
      if (true) {
        // 3
        if (true) {
          // 4
          console.log("ello");
        }
      }
    }
  }

  return isBoolean(x, 2);
}
