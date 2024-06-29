function digitCount(num: number): number {
  let totalDigit: number = 0;

  while (num > 0) {
    totalDigit++;
    num = Math.floor(num / 10);
  }

  return totalDigit;
}

console.log('🚀 ~ Output:', digitCount(7789));
