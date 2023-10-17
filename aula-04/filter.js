const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length >= 6);
console.log(longWords); // ["banana", "cherry"]

const alunos = [
  { nome: "Carlos", idade: 15 },
  { nome: "Julia", idade: 18 },
  { nome: "Pedro", idade: 12 },
  { nome: "Aline", idade: 23 },
  { nome: "Joana", idade: 16 },
  { nome: "Maisa", idade: 13 },
];

const maioresDeIdade = alunos.filter((aluno) => aluno.idade >= 18);
console.log(maioresDeIdade);
