// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.some((num) => num % 2 === 0);
// console.log(even); // true

// const words = ["apple", "banana", "cherry", "date"];
// const longEnough = words.some((word) => word.length >= 6);
// console.log(longEnough); // true

const alunos = [
  { nome: "Carlos", idade: 15 },
  { nome: "Julia", idade: 17 },
  { nome: "Pedro", idade: 12 },
  { nome: "Aline", idade: 13 },
  { nome: "Joana", idade: 16 },
  { nome: "Maisa", idade: 13 },
];

const haAlgumMaiorDeIdade = alunos.some((aluno) => aluno.idade >= 18);
console.log(haAlgumMaiorDeIdade);
