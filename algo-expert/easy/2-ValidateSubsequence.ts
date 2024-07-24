// O(n) time | O(1) space
export const isValidSubsequence = (
  array: number[],
  subsequence: number[]
): boolean => {
  let seqIdx = 0;

  for (const value of array) {
    if (seqIdx === subsequence.length) return true;
    if (subsequence[seqIdx] === value) seqIdx++;
  }

  return seqIdx === subsequence.length;
};

// O(n) time | O(1) space
export const isValidSubsequence2 = (
  array: number[],
  subsequence: number[]
): boolean => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (array.length > arrIdx && subsequence.length > seqIdx) {
    if (array[arrIdx] === subsequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }

  return seqIdx === subsequence.length;
};
