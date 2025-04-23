// solve menggunakan pendekatan recursive function
export const sumEvenNumbers = (obj: any): number => {
  let total = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number" && value % 2 === 0) {
      total += value;
    } else if (typeof value === "object" && value !== null) {
      total += sumEvenNumbers(value);
    }
  }

  return total;
};

// contoh
const input1 = {
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

console.log(sumEvenNumbers(input1)); // Output: 6

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(sumEvenNumbers(input2)); // Output: 12
