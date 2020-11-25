const assert = require("chai").assert;

const { sayHello, addNumbers } = require("../app");

describe("App", () => {
  it("sayHello should return hello", () => {
    let result = sayHello();

    assert.equal(result, "hello");
  });

  it("sayHello should return type string", () => {
    let result = sayHello();

    assert.typeOf(result, "string");
  });

  it("addNumbers should be above 5", () => {
    let result = addNumbers(5, 1);

    assert.isAbove(result, 5);
  });

  it("addNumbers should be return type number", () => {
    let result = addNumbers(5, 1);
    assert.typeOf(result, "number");
  });
});
