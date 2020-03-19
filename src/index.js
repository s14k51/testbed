const isBoolean = require("lodash/isBoolean");

function sayX() {
  const x = 1;

  return isBoolean(x);
}

function sayY() {
  const y = 1;

  return isBoolean(y);
}
