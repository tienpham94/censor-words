"use strict";

var _ = require(".");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("replaces blacklisted words with asterisks", function () {
  expect((0, _2.default)("My name is Tien", ["Tien"])).toBe("My name is ***");
});

test("replaces all instances", function () {
  expect((0, _2.default)("My name is Tien and Tien is cool", ["Tien"])).toBe("My name is *** and *** is cool");
});