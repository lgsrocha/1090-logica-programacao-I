/*
    Escreva uma função recursiva que imprima uma contagem regressiva de n a 1.
*/

// function contagemRegressiva(n) {
//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//   }
// }

// contagemRegressiva(10);

function contagemRegressivaRecursiva(n) {
  // condição de parada
  if (n === 0) {
    return;
  } else {
    console.log(n);
    contagemRegressivaRecursiva(n - 1);
  }
}

contagemRegressivaRecursiva(10);
