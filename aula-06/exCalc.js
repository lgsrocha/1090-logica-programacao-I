/*
    Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/
prompt = require('prompt-sync')()
console.log("Bem vindo à nossa calculadora")
console.log("---------------------------------\n")

const funcao = prompt(`
Selecione a sua operacao: 
* multiplica 
+ soma
/ divide  
- subtrai
`)

const valor1 = prompt("digite o primeiro valor: ")
const valor2 = prompt("digite o segundo valor: ")

function soma (a,b){
    return a + b
}

function multiplica(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function subtrai(a,b){
    return a - b 
}

function calculadora(operacao){
    // let calculando
    switch (operacao) {
        case "-":

            return subtrai

        case "+":
            
            return soma

        case "/":
            
            return divide

        case "*":
            
            return multiplica
            
    
        default:
            break;
    }
}

console.log(calculadora(funcao)(+valor1,+valor2))