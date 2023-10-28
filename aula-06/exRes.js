/*
  Seja n o enésimo termo da sequência de fibonacci
  , ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de fibonacci
   e ele exiba tal termo.

  6
  Ex: 0, 1, 1, 2, 3, 5
*/

// function fibonacci
// (termo){
//     let arrFibo = [0,1]
    
//     for(let i = 0; i < termo; i++){
//         let novoTermo = arrFibo[arrFibo.length-1] + arrFibo[arrFibo.length-2]
//         arrFibo.push(novoTermo)
//     }
//     console.log(arrFibo[arrFibo.length-3])

// }
// fibonacci(5)

function fibonacci(termo){
  if(termo < 1) {
    return "valor inválido"
  }

    let arrFibo = [0]
    let f1 = 1

    for(let i = 0; i < termo - 1; i++){
      arrFibo.push(f1)
      f1 += arrFibo[arrFibo.length-2]
    }
    return arrFibo[arrFibo.length-1]
}
console.log(fibonacci(6))