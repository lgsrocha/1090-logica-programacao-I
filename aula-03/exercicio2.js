/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/
const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];

// código feio
// for(let i = 0; i < listaDeAlunos.length; i++){
//   console.log(listaDeAlunos[i].nome + " " + ((listaDeAlunos[i].notas[0]+listaDeAlunos[i].notas[1])/2))
// }

for(const {nome, notas} of listaDeAlunos){
  let media = (notas[0]+notas[1])/2;
  let merito = media >= 8 ? "⭐" : "";
  console.log(`NOME: ${nome}, MÉDIA: ${media} ${merito}`)
}

