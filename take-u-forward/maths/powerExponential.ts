// Time Complexity => O(N)
function powerExponential(num: number, powerBy: number): number {
  let answer = 1;

  for (let i = 1; i <= powerBy; i++) {
    answer = num * answer;
  }

  return answer;
}

console.log('🚀 ~ Output:', powerExponential(2, 5));

// Time Complexity => O(1)
function powerExponentialBest(num: number, powerBy: number): number {
  const powerByTemp = powerBy;
  let answer = 1;

  while (powerBy > 0) {
    if (powerBy % 2 === 1) {
      answer = answer * num;
      powerBy = powerBy - 1;
    } else {
      powerBy = powerBy / 2;
      num = num * num;
    }
  }

  if (powerByTemp < 0) {
    answer = 1 / answer;
  }

  return answer;
}

console.log('🚀 ~ Output:', powerExponentialBest(2, -5));
