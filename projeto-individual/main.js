/**
 * Necessário prompt-sync, caso não esteja funcionando execute npm i prompt-sync
 * Inicie a Aplicação com 'node main.js'
 */

//imports
const {listaClientes, listaVeiculos, diaEnvio, emailsMarketing, body} = require('./clientes');
const enviarEmail = require('./envia-email')
const prompt = require("prompt-sync")();

//dia padrão agendado para envio dos emails
let agendamento = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"]
let diaPadrao = agendamento[1]


console.log("--------------------------------")
console.log("\n Bem- vindo(a) à Car Store \n")
console.log("--------------------------------")
main()
function main (){

console.log(`
1 Lista de clientes
2 Lista de carros
3 Agendar envio dos emails
4 Enviar Emails
5 Sair
`)
const escolha = prompt(``)

     
    switch (escolha) {
        case "1":
            console.log(listaClientes)
            main()
            break;
        
        case "2":
            console.log(listaVeiculos)
            main()
            break;
        //transformar diaPadrao em uma funcao e importar
        case "3":
            console.log(`O envio dos emails está agendado para ${diaPadrao}
                        deseja alterar?`)
            let alterar = prompt("s ou n").toLocaleLowerCase()
            if (alterar !== "s"){
                main()
                break
            } else{
                console.log(`
                0 Domingo
                1 Segunda
                2 Terça
                3 Quarta
                4 Quinta
                5 Sexta
                6 Sábado
                `)
                let novaData = prompt("")
                diaPadrao = agendamento[novaData]
            }
            main()
            break;
            

        case "4":
            let assunto = prompt("Digite o assunto para os emails dessa semana.")
            emailsMarketing.map((a)=>(enviarEmail(a.nome,assunto,body)))
                      
            
            break;
            

        case "5":
            // sair
            return;

        default:
            console.log("Opção inválida")
            main()
            break;
    }
}

