//EX 1
/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pares = [];
const impares = [];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        pares.push(lista[i]);
    } else {
        impares.push(lista[i]);
    }
}

console.log(pares + " -> pares")
console.log(impares + " -> impares")
//-----------------------------------------------------------------------------------------------------

// EX 2
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
  
  for(const {nome, notas} of listaDeAlunos){
    let media = (notas[0]+notas[1])/2;
    let merito = media >= 8 ? "⭐" : "";
    console.log(`NOME: ${nome}, MÉDIA: ${media} ${merito}`)
  }
  
//-----------------------------------------------------------------------------------------------------

//EX 3
/*
Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

const resultadoSorteio = []
for (let i = 0; i<6 ;i++){
let rodada = ["Primeira","Segunda","Terceira","Quarta","Quinta","Final"] 
resultadoSorteio.push(Math.ceil(Math.random() * 60))

console.log(`RODADA: ${rodada[i]} ${resultadoSorteio}`)
}