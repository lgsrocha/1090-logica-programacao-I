const numbers = [1, 2, 3, 4, "Lucas", 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  const sum = accumulator + currentValue;
  return sum;
}, 30);
console.log(sum); // 15
