function sieveOfEratosthenes(num: number) {
  const primeBox = new Array(num + 1);
  const answer: number[] = [];

  for (let i = 2; i <= num; i++) {
    primeBox[i] = 1;
  }

  for (let i = 0; i * i < num; i++) {
    if (primeBox[i] === 1) {
      for (let j = i * i; j <= num; j += i) {
        primeBox[j] = 0;
      }
    }
  }

  for (let i = 2; i <= num; i++) {
    if (primeBox[i] === 1) {
      answer.push(i);
    }
  }

  return answer;
}

console.log('🚀 ~ Output:', sieveOfEratosthenes(30));
