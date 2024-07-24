// O(n) time | O(n) space
export const sortedSquaredArray = (array: number[]): number[] => {
  const result: number[] = new Array(array.length).fill(0);
  let smallerIdx = 0;
  let largerIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerIdx];
    const largerValue = array[largerIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      result[i] = smallerValue * smallerValue;
      smallerIdx++;
    } else {
      result[i] = largerValue * largerValue;
      largerIdx--;
    }
  }

  return result;
};

// O(nlog(n)) time | O(n) space
export const sortedSquaredArray2 = (array: number[]): number[] => {
  const result: number[] = [];

  for (const value of array) {
    result.push(value ** 2);
  }

  result.sort((a, b) => a - b);

  return result;
};
