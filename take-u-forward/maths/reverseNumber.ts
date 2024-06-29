function reverseNumberFunc(num: number): number {
  let reverseNumber: number = 0;

  while (num > 0) {
    const lastDigit = num % 10;

    num = Math.floor(num / 10);
    reverseNumber = reverseNumber * 10 + lastDigit;
  }

  return reverseNumber;
}

console.log('🚀 ~ Output:', reverseNumberFunc(1400));
