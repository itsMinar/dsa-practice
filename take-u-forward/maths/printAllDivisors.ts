// Time Complexity => O(N)
function printAllDivisors(num: number): void {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}

printAllDivisors(36);

// Time Complexity => O(sqrt(N)) => Best One ✅
function printAllDivisors2(num: number): void {
  const allDivisors: number[] = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      allDivisors.push(i);
      if (num / i !== i) {
        allDivisors.push(num / i);
      }
    }
  }

  allDivisors.sort(function (a, b) {
    return a - b;
  });

  for (const iterator of allDivisors) {
    console.log(iterator);
  }
}

printAllDivisors2(36);
