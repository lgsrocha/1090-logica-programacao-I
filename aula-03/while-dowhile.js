const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

let i = 0;
// while (i < alunos.length) {
//   console.log(`O aluno ${alunos[i].nome} tem ${alunos[i].idade} anos de idade`);
//   i++;
// }

do {
  console.log(`O aluno ${alunos[i].nome} tem ${alunos[i].idade} anos de idade`);
  i++;
} while (i < alunos.length);
