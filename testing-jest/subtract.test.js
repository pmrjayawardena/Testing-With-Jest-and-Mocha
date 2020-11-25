const subtract = require("./subtract");

test("properly subtract two numbers", () => {
  expect(subtract(4, 2)).toBe(2);
});
