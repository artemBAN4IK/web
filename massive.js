function massiveNumbers() {
  const numbers = [4, 8, 15, 16, 23, 42];
  let sum = 0;
  let max = numbers[0];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] > 10) {
      result.push(numbers[i]);
    }
  }
  console.log(sum, max, result);
  let sum2 = numbers.reduce((a, b) => a + b, 0);
  let max2 = Math.max(...numbers);
  let result2 = numbers.filter(x => x > 10);
  console.log(sum2, max2, result2);
}

massiveNumbers();
