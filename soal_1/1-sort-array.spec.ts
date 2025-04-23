import { sortDescending } from "./1-sort-array";

describe("sortDescending", () => {
  it("should sort numbers from largest to smallest", () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expected = [5, 4, 3, 3, 2, 2, 1, 1];
    expect(sortDescending(input)).toEqual(expected);
  });

  it("should handle an already sorted descending array", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [5, 4, 3, 2, 1];
    expect(sortDescending(input)).toEqual(expected);
  });

  it("should handle an empty array", () => {
    const input = [];
    const expected = [];
    expect(sortDescending(input)).toEqual(expected);
  });

  it("should handle array with all same values", () => {
    const input = [2, 2, 2, 2];
    const expected = [2, 2, 2, 2];
    expect(sortDescending(input)).toEqual(expected);
  });

  it("should not mutate the original array", () => {
    const input = [3, 1, 2];
    const inputCopy = [...input];
    sortDescending(input);
    expect(input).toEqual(inputCopy);
  });

  it("should handle negative numbers", () => {
    const input = [-1, -5, -3, 0, 2];
    const expected = [2, 0, -1, -3, -5];
    expect(sortDescending(input)).toEqual(expected);
  });
});
