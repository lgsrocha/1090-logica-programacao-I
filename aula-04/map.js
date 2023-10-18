const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

const alunos = [
  { nome: "Carlos", idade: 15, notas: [7, 8.5, 9] },
  { nome: "Julia", idade: 18, notas: [7, 6.5, 5] },
  { nome: "Pedro", idade: 12, notas: [4, 8, 9] },
  { nome: "Aline", idade: 23, notas: [10, 10, 4] },
  { nome: "Joana", idade: 16, notas: [8, 5, 9] },
  { nome: "Maisa", idade: 13, notas: [5, 6, 9] },
];

const alunosResultado = alunos.map((aluno) => {
  let somaNotas = 0;
  aluno.notas.forEach((nota) => (somaNotas += nota));
  return {
    nome: aluno.nome,
    status: somaNotas / aluno.notas.length >= 7 ? "Aprovado" : "Reprovado",
  };
});

console.log(alunosResultado);
