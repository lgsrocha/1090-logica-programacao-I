const numbers = [1, 2, 3, 4, 5];
const even = numbers.every((num, index, arr) => {
  const isEven = num % 2 === 0;
  return isEven;
});
console.log(even); // false

const words = ["apple", "banana", "cherry"];
const longEnough = words.every((word) => word.length >= 5);
console.log(longEnough); // true
