// normal algorithm
function gcdOrHcf(num1: number, num2: number): number {
  let gcdNumber: number = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcdNumber = i;
    }
  }

  return gcdNumber;
}

console.log('🚀 ~ Output:', gcdOrHcf(70, 12));

// Equilateral algorithm -> Best One ✅
// gcd(a,b) == gcd((a-b),b) where a>b
// gcd(a,b) == gcd((a%b),b) where a>b
function gcdOrHcfEquilateral(num1: number, num2: number): number {
  while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  return num1 === 0 ? num2 : num1;
}

console.log('🚀 ~ Output:', gcdOrHcfEquilateral(10, 20));
