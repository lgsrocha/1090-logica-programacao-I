const frutas = ["maçã", "banana", "abacaxi"];
// console.log(frutas[0]); // maçã
// console.log(frutas[-1]); // undefined
// console.log(frutas[frutas.length - 1]); // abacaxi

// console.log(frutas.at(0)); // maçã
// console.log(frutas.at(-1)); // abacaxi
// console.log(frutas.at(-2)); // banana
// console.log(frutas.at(frutas.length - 1)); // abacaxi

const matriz = [
  [1, 3, 5],
  [2, 4],
  [6, 9, 0],
];

console.log(matriz[1][1]); // 4
console.log(matriz.at(1).at(1)); // 4

console.log(matriz[1].length);
