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

// Time Complexity => O(N)
function primeFactors(num: number) {
  const primeFactorsNumber: number[] = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      if (isPrimeNumber(i)) {
        primeFactorsNumber.push(i);
      }
    }
  }

  return primeFactorsNumber;
}

console.log('🚀 ~ Output:', primeFactors(60));

// Time Complexity => O(N)
function primeFactors2(num: number) {
  const primeFactorsNumber: number[] = [];

  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (isPrimeNumber(i)) {
        primeFactorsNumber.push(i);
      }

      if (num / i != i) {
        if (isPrimeNumber(num / i)) {
          primeFactorsNumber.push(num / i);
        }
      }
    }
  }

  return primeFactorsNumber;
}

console.log('🚀 ~ Output 2:', primeFactors2(60));

// Time Complexity => O(N)
function primeFactorsBest(num: number) {
  const primeFactorsNumber: number[] = [];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primeFactorsNumber.push(i);

      while (num % i === 0) {
        num = num / i;
      }
    }
  }

  if (num != 1) primeFactorsNumber.push(num);

  return primeFactorsNumber;
}

console.log('🚀 ~ Output 3:', primeFactorsBest(16));
