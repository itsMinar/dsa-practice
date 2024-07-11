// print the count of primes for range L-R
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

  if (divisorsCount === 2) {
    return true;
  }

  return false;
}

// Time Complexity => O(Q*(R-L+1)*sqrt(N))
function countPrimeInRange(queries: number[][]) {
  let answer: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];

    let count = 0;

    for (let j = l; j <= r; j++) {
      if (isPrimeNumber(j)) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}

const queries = [
  [3, 10],
  [8, 20],
  [1, 5],
];

console.log('🚀 ~ Output 1:', countPrimeInRange(queries));

// ============================================================

function getSieve(n: number) {
  const prime = Array(n + 1).fill(1);

  prime[0] = prime[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (prime[i] === 1) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }

  return prime;
}

// Time Complexity => O(Q*(R-L+1))
function countPrimeInRange2(queries: number[][]) {
  const prime = getSieve(10 ** 6);
  let answer: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];

    let count = 0;

    for (let j = l; j <= r; j++) {
      if (prime[j] === 1) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log('🚀 ~ Output 2:', countPrimeInRange2(queries));

// ============================================================

// Time Complexity => O(Q)
function countPrimeInRangeBest(queries: number[][]) {
  const prime = getSieve(10 ** 6);
  let count = 0;
  const answer: number[] = [];

  for (let i = 2; i < prime.length; i++) {
    count = count + prime[i];
    prime[i] = count;
  }

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];

    answer.push(prime[r] - prime[l - 1]);
  }

  return answer;
}

console.log('🚀 ~ Output 3:', countPrimeInRangeBest(queries));
