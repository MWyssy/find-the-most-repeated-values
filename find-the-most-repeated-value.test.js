const findTheMostRepeatedValue = require("./find-the-most-repeated-value.js");

describe("findTheMostRepeatedValue tests", () => {
  it("returns an object with an elements key and a value of an array, and a repeats key with a value of a number", () => {
    const expectedOutput = {
      elements: [],
      repeats: null,
    };

    expect(findTheMostRepeatedValue([])).toEqual(expectedOutput);
  });
  it("returns an empty 'elements' array, and a null 'repeats' value if there are no repeated words in the array. ", () => {
    const expectedOutput = {
      elements: [],
      repeats: null,
    };
    const input = ["foo", "bar", "hello", "world"];

    expect(findTheMostRepeatedValue(input)).toEqual(expectedOutput);
  });
  it("includes a repeated word in the elements array, and counts the number of repeats, when there is just one word repeated.", () => {
    const expectedOutput = {
      elements: ["foo"],
      repeats: 2,
    };
    const input = ["foo", "bar", "hello", "foo", "world"];

    expect(findTheMostRepeatedValue(input)).toEqual(expectedOutput);
  });
  it("includes all repeated words in the elements array, and counts the most repeated word, if there are more than one repeated words.", () => {
    const expectedOutput = {
      elements: ["foo", "world"],
      repeats: 3,
    };
    const input = ["foo", "bar", "hello", "foo", "world", "world", "foo"];

    expect(findTheMostRepeatedValue(input)).toEqual(expectedOutput);
  });
  it("does not mutate the original array", () => {
    const input = ["foo", "bar", "hello", "foo", "world", "world", "foo"];
    const copyInput = [...input];

    findTheMostRepeatedValue(input);

    expect(input).toEqual(copyInput);
  });
});
