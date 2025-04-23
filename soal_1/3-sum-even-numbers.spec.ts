// sumEvenNumbers.test.ts
import { sumEvenNumbers } from "./3-sum-even-numbers";

describe("sumEvenNumbers", () => {
  it("should sum all even numbers in nested object (example 1)", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(sumEvenNumbers(input)).toBe(6);
  });

  it("should sum all even numbers in nested object (example 2)", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };
    expect(sumEvenNumbers(input)).toBe(12);
  });

  it("should return 0 for object without any even numbers", () => {
    const input = {
      a: 1,
      b: { b: 3 },
      c: { c: { d: 5 } },
      d: true,
      e: "string",
    };
    expect(sumEvenNumbers(input)).toBe(0);
  });

  it("should handle empty object", () => {
    expect(sumEvenNumbers({})).toBe(0);
  });

  it("should ignore null and undefined values", () => {
    const input = {
      a: 2,
      b: null,
      c: undefined,
      d: { d: 4, e: null },
    };
    expect(sumEvenNumbers(input)).toBe(6);
  });
});
