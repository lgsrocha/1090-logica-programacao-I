const alunos = [
  { nome: "Carlos", idade: 15 },
  { nome: "Julia", idade: 18 },
  { nome: "Pedro", idade: 12 },
  { nome: "Aline", idade: 23 },
  { nome: "Joana", idade: 16 },
  { nome: "Maisa", idade: 13 },
];

// console.log(alunos.toString());
const serialized = JSON.stringify(alunos);
console.log(serialized);
const deserialized = JSON.parse(serialized);
console.log(deserialized);
