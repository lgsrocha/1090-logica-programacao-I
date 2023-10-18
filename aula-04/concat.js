const arr1 = [1, 2, 3, "Andre"];
const arr2 = [
  4,
  5,
  6,
  (function () {
    return 1;
  })(),
];
const arr3 = [7, 8, 9];

const newArr = arr1.concat(arr2, arr3);
const newArr2 = [...arr1, ...arr2, ...arr3];
const newArr3 = arr1 + arr2 + arr3;
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArr2.join(",")); // [1, 2, 3, 4, 5, 6, 7, 8, 9]?
console.log(newArr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]?
console.log(typeof newArr3);
// arr2[3]();
