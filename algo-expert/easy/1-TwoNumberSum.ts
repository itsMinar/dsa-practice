// O(nlog(n)) time | O(1) space
export const twoNumberSum = (arr: number[], targetSum: number): number[] => {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [arr[left], arr[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right++;
    }
  }

  return [];
};

// O(n) time | O(n) space
export const twoNumberSum3 = (arr: number[], targetSum: number): number[] => {
  const nums: { [key: string]: boolean } = {};

  for (const num of arr) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
};

// O(n^2) time | O(1) space
export const twoNumberSum2 = (arr: number[], targetSum: number): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
};
