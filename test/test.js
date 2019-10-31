const assert = chai.assert;

describe("yellSomething", function() {

  it("should return string in all caps", function() {
    const helloHowAreYou = yellSomething("hi how are you?");
    assert.equal(helloHowAreYou, "HI HOW ARE YOU?")
  });
  it("should fail if no string provided", function() {
    const helloHowAreYou = yellSomething();
    assert.equal(helloHowAreYou, "Please input a string.")
  });
  it("should fail if argument is not of type string", function() {
    const helloHowAreYou = yellSomething(5);
    assert.equal(helloHowAreYou, "Please input a string.")
  });
  it("should fail if more than one argument is provided", function() {
    const helloHowAreYou = yellSomething("heyy", "spooky", "jeepers", "boo");
    assert.equal(helloHowAreYou, "Please input a string.");
  });
});

describe("addTwoNumbers", function() {
  it("return sum of two nums", function() {
    const twoNumbers = addTwoNumbers(5, 3);
    assert.equal(twoNumbers, 8);
  });
});

describe("pow", function() {
  it("should multiply num1 to the power of num2", function() {
    const powerTo = pow(5, 3);
    assert.equal(powerTo, 125);
  });
});

describe("longestWord", function() {
  it("should the longest word of an array", function() {
    const longest = longestWord(["cat", "cats"]);
    assert.equal(longest, "cats")
  });
  it("should check type of elements in the array", function() {
    const elType = longestWord(["string", 10]);
    assert.equal(elType, 'Please input an array of strings!');
  });
  it("should return first element of array if array length is one", function() {
    const elType = longestWord(["string"]);
    assert.equal(elType, 'string');
  });
})