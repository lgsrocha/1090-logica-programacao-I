/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  6
  Ex: 0, 1, 1, 2, 3, 5
*/

function fibonacci(n) {
  if (n <= 0) return;
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(6));
