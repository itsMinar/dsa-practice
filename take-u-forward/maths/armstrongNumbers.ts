function armstrongNumbers(num: number): boolean {
  const mainNumber: number = num;
  let sum: number = 0;

  while (num > 0) {
    const lastDigit = num % 10;

    sum = sum + lastDigit ** 3;

    num = Math.floor(num / 10);
  }

  return mainNumber === sum ? true : false;
}

console.log('🚀 ~ Output:', armstrongNumbers(35));
