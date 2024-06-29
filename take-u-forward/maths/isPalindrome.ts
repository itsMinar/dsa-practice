function isPalindrome(num: number): boolean {
  const mainNumber: number = num;
  let reverseNumber: number = 0;

  while (num > 0) {
    const lastDigit = num % 10;

    num = Math.floor(num / 10);
    reverseNumber = reverseNumber * 10 + lastDigit;
  }

  return mainNumber === reverseNumber ? true : false;
}

console.log('🚀 ~ Output:', isPalindrome(121));
