const isBoolean = require("lodash/isBoolean");

const str = "hello",
  str2 = "hello2";

function sayX() {
  const x = 1;
  const y = 2;
  const z = 5;

  return isBoolean(x, 2);
}

function sayY() {
  const x = 1;
  const y = 2;
  const z = 5;

  return isBoolean(y, 3);
}

function sayY() {
  const x = 1;
  const y = 2;
  const z = 5;

  return isBoolean(y, 3);
}
