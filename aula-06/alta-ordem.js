/*
  Faça um programa com uma função chamada "somaImposto".
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna o preço final do produto ao consumidor.
*/

// Sintaxe
// function funcaoAltaOrdem(param1aFn) {
//   return function (param2aFn) {
//     return algo;
//   };
// }

// funcaoAltaOrdem(param1aFn)(param2aFn);

//

function somaImposto(taxaImposto) {
  return function (custo) {
    return custo / (1 - taxaImposto);
  };
}

const preco = somaImposto(0.5)(100);
// console.log(preco);

const brasil = somaImposto(0.5);
const eua = somaImposto(0.25);

console.log(brasil(1250));
console.log(eua(1250));
