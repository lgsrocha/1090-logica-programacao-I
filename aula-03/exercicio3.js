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