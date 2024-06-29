// Time Complexity => O(sqrt(N))
function isPrimeNumber(num: number): boolean {
  let divisorsCount: number = 0;

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisorsCount++;
      if (num / i !== i) {
        divisorsCount++;
      }
    }
  }

  return divisorsCount > 2 ? false : true;
}

console.log('🚀 ~ Output:', isPrimeNumber(12));
