/*
    Escreva uma função recursiva para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/

function fatorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * fatorial(n - 1);
}

console.log(fatorial(4));
