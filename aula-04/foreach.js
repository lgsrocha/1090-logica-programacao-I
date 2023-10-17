const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));
numbers.forEach((num, i) => {
  numbers[i] = num * 2;
});
console.log(numbers);
