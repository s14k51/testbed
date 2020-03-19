const isBoolean = require("lodash/isBoolean");

const str = "hello";
const str2 = "hello2";

function sayX() {
  const x = 1;

  return isBoolean(x, 2);
}

function sayY() {
  const y = 1;

  return isBoolean(y, 3);
}
