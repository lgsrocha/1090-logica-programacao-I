// function saudar(nome, sobrenome, termo) {
//   return `${termo}, ${nome} ${sobrenome}!`;
// }

// function saudar2(nome, sobrenome, tipoTermo) {
//   const termo = tipoTermo === "saudacao" ? "Olá" : "Adeus";
//   return `${termo}, ${nome} ${sobrenome}!`;
// }

// console.log(saudar("Ivirson", "Daltro", "Olá"));
// console.log(saudar2("Ivirson", "Daltro", "adeus"));

// console.log(soma(2, 3));

// // const soma = function (a, b) {
// //   return a + b;
// // };

// function soma(a, b) {
//   return a + b;
// }

const lista = [1, 2, 3, 4, 5];
lista.forEach(function (item) {
  console.log(item);
});

lista.map(function (item) {
  console.log(item * 2);
});
