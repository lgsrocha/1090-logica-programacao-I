/*
  Faça um programa com uma função chamada "somaImposto".
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna o preço final do produto ao consumidor.
*/

// const somaImposto = (taxaImposto, custo) => {
//   const valorImposto = taxaImposto * custo;
//   return valorImposto + custo;
// };

// const somaImposto = (taxaImposto, custo) => {
//   if (taxaImposto > 1) {
//     taxaImposto / 100;
//   }
//   return (taxaImposto + 1) * custo;
// };

const somaImposto = (taxaImposto, custo) => {
  if (taxaImposto > 1) {
    taxaImposto / 100;
  }
  return (taxaImposto + 1) * custo;
};

console.log(somaImposto(0.17, 100));
console.log(somaImposto("17%", 100));
