const isBoolean = require("lodash/isBoolean");

const str = "hello";

function sayX() {
  const x = 1;
  const y = 2;
  const z = 5;

  if (true) {
    if (true) {
      if (true) {
        if (true) {
          console.log("ello");
        }
      }
    }
  }

  return isBoolean(x, 2);
}
