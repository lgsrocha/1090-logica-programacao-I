const soma = function (a, b) {
  return a + b;
};

const soma2 = (a, b) => a + b;

const calculaPreco = (custo) => custo * 0.92;

// const saudar = function () {
//   return "Olá";
// };

const saudar = () => "Olá";
const despedir = () => "Adeus";

const comunicar = (nome, callback) => {
  return callback() + ", " + nome;
};

console.log(typeof saudar); // function
console.log(typeof saudar()); // string?

console.log(comunicar("Ivirson", saudar));
console.log(comunicar("Ivirson", saudar));
console.log(comunicar("Ivirson", () => "Kolé"));
