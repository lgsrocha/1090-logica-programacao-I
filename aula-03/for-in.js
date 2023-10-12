const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

for (const i in alunos) {
  //   console.log(i);
  //   console.log(alunos[i]);
}

const aluno = alunos[0]; // { nome: "Carlos", idade: 18 }
for (const prop in aluno) {
  //   console.log(prop);
  //   console.log(`O aluno ${prop.nome} tem ${prop.idade} anos de idade`);
  //   console.log(`O aluno ${aluno.prop} tem ${aluno.prop} anos de idade`);
  //   console.log(`O aluno ${aluno[prop]} tem ${aluno[prop]} anos de idade`);
  //   console.log(`O aluno ${prop[0]} tem ${prop[1]} anos de idade`);
  //   console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos de idade`);
}

let resumo = "Aluno:";
for (const prop in aluno) {
  resumo += `
    ${prop}: ${aluno[prop]}
  `;
}
console.log(resumo);
