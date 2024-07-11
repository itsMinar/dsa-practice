function getPrimeFactors(num: number) {
  const primeFactorsNumber: number[] = [];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primeFactorsNumber.push(i);

      while (num % i === 0) {
        num = num / i;
      }
    }
  }

  if (num > 1) primeFactorsNumber.push(num);

  return primeFactorsNumber;
}

// Time Complexity => O(Q)*O(sqrt(N))
function smallestPrimeFactor(queries: number[]) {
  const list: number[][] = [];
  for (let i = 0; i < queries.length; i++) {
    const output = getPrimeFactors(queries[i]);
    list.push(output);
  }

  return list;
}

console.log('🚀 ~ Output 1:', smallestPrimeFactor([12, 16, 60]));

// =================================================================

// Time Complexity => O(Q)*O(sqrt(N))
function smallestPrimeFactorBest(queries: number[]) {
  const spf = new Array(10 ** 5 + 1);

  for (let i = 1; i <= 10 ** 5; i++) spf[i] = i;

  for (let i = 2; i * i <= 10 ** 5; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= 10 ** 5; j = j + i) {
        if (spf[j] === j) {
          spf[j] = i;
        }
      }
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let n = queries[i];
    while (n != 1) {
      console.log(spf[n]);
      n = n / spf[n];
    }
  }
}

smallestPrimeFactorBest([12, 16, 60]);
