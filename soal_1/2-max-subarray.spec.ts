// maxSubarray.test.ts
import { maxSubarraySum } from './2-max-subarray';

describe('maxSubarraySum', () => {
  it('should return 700 for input ([100, 200, 300, 400], 2)', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  });

  it('should return 39 for input ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)', () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  it('should return 5 for input ([-3, 4, 0, -2, 6, -1], 2)', () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it('should return 0 if subarray length is greater than array length', () => {
    expect(maxSubarraySum([1, 2], 3)).toBe(0);
  });

  it('should return 0 for empty array input', () => {
    expect(maxSubarraySum([], 1)).toBe(0);
  });

  it('should handle case where subLen is 1 (max single element)', () => {
    expect(maxSubarraySum([1, 3, 5, 2, 8], 1)).toBe(8);
  });

  it('should handle array with all negative numbers', () => {
    expect(maxSubarraySum([-5, -2, -1, -3], 2)).toBe(-3); // -1 + -2
  });
});
