// solve dengan teknik algoritma sliding-window
export const maxSubarraySum = (arr: number[], subLen: number): number => {
  if (arr.length < subLen) return 0;

  // Hitung jumlah awal dari window pertama
  let maxSum = 0;
  for (let i = 0; i < subLen; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  // Geser window dan update jumlah maksimum
  for (let i = subLen; i < arr.length; i++) {
    tempSum = tempSum - arr[i - subLen] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Contoh
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
