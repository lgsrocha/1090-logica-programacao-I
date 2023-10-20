const enviarEmail = require("./envia-email");

let listaClientes =[
    {nome: "João", email: "jao@mail.com", aceitaMarketing: true, ultimaVisita: "20/09/2023"},
    {nome: "Maria", email: "ria@mail.com", aceitaMarketing: false, ultimaVisita: "27/09/2023"},
    {nome: "José", email: "zé@mail.com", aceitaMarketing: true, ultimaVisita: "29/09/2023"},
    {nome: "Pedro", email: "pe@mail.com", aceitaMarketing: false, ultimaVisita: "15/09/2023"},
    {nome: "Ana", email: "ana@mail.com", aceitaMarketing: true, ultimaVisita: "14/09/2023"},
    {nome: "Lucas", email: "lucas@mail.com", aceitaMarketing: false, ultimaVisita: "02/02/2022"},
    {nome: "Mariana", email: "mariana@mail.com", aceitaMarketing: true, ultimaVisita: "03/03/2022"},
    {nome: "Ricardo", email: "ricardo@mail.com", aceitaMarketing: false, ultimaVisita: "04/04/2022"},
    {nome: "Julia", email: "julia@mail.com", aceitaMarketing: true, ultimaVisita: "05/05/2022"},
    {nome: "Fernando", email: "fernando@mail.com", aceitaMarketing: false, ultimaVisita: "06/06/2022"},
    {nome: "Carla", email: "carla@mail.com", aceitaMarketing: true, ultimaVisita: "07/07/2022"},
    {nome: "Roberto", email: "roberto@mail.com", aceitaMarketing: false, ultimaVisita: "08/08/2022"},
    {nome: "Amanda", email: "amanda@mail.com", aceitaMarketing: true, ultimaVisita: "09/09/2022"},
    {nome: "Gabriel", email: "gabriel@mail.com", aceitaMarketing: false, ultimaVisita: "10/10/2022"},
    {nome: "Isabela", email: "isabela@mail.com", aceitaMarketing: true, ultimaVisita: "11/11/2022"},
    {nome: "Renato", email: "renato@mail.com", aceitaMarketing: false, ultimaVisita: "12/12/2022"},
    {nome: "Larissa", email: "larissa@mail.com", aceitaMarketing: true, ultimaVisita: "13/01/2023"},
    {nome: "Thiago", email: "thiago@mail.com", aceitaMarketing: false, ultimaVisita: "29/10/2023"},
    {nome: "Camila", email: "camila@mail.com", aceitaMarketing: true, ultimaVisita: "15/03/2023"},
    {nome: "Vinicius", email: "vinicius@mail.com", aceitaMarketing: false, ultimaVisita: "16/04/2023"},
    {nome: "Priscila", email: "priscila@mail.com", aceitaMarketing: true, ultimaVisita: "10/10/2023"}
]
let listaVeiculos = [
    [
        {modelo: "Onix", marca: "Chevrolet", basico: 65000, completo: 76000, ano: "2022/01", vendidos: 5000},
        {modelo: "HB20", marca: "Hyundai", basico: 72000, completo: 82000, ano: "2021/01", vendidos: 4530},
        {modelo: "Corolla", marca: "Toyota", basico: 120000, completo: 140000, ano: "2022/01", vendidos: 2000},
        {modelo: "Golf", marca: "Volkswagen", basico: 95000, completo: 110000, ano: "2021/01", vendidos: 3000},
        {modelo: "Compass", marca: "Jeep", basico: 140000, completo: 160000, ano: "2022/01", vendidos: 2600},
        {modelo: "Creta", marca: "Hyundai", basico: 80000, completo: 95000, ano: "2022/01", vendidos: 2900},
        {modelo: "T-Cross", marca: "Volkswagen", basico: 90000, completo: 105000, ano: "2021/01", vendidos: 3230},
        {modelo: "Nivus", marca: "Volkswagen", basico: 85000, completo: 100000, ano: "2021/01", vendidos: 500},
        {modelo: "Kicks", marca: "Nissan", basico: 85000, completo: 100000, ano: "2022/01", vendidos: 4002},
        {modelo: "Renegade", marca: "Jeep", basico: 100000, completo: 120000, ano: "2021/01", vendidos: 1223},
        {marca: "Citroen", modelo: "C3", ano: "2023/01", basico: 62090, completo: 70690, vendidos: 4402},
        {marca: "Honda", modelo: "HRV", ano: "2023/01", basico: 130000, completo: 150000, vendidos: 4499},
        {marca: "Volkswagen", modelo: "Polo Track", ano: "2023/01", basico: 60000, completo: 70000, vendidos: 4994},
        {marca: "Honda", modelo: "City", ano: "2023/01", basico: 110000, completo: 120000, vendidos: 1023},
        {marca: "Toyota", modelo: "Yaris Cross", ano: "2023/01", basico: 153000, completo: 183900, vendidos: 1651},
        {marca: "Chevrolet", modelo: "Montana", ano: "2023/01", basico: 140000, completo: 150000, vendidos: 2034},
        {marca: "Hiunday", modelo: "Santa Cruz", ano: "2023/01", basico: 130000, completo: 145000, vendidos: 4002},
        {marca: "Ford", modelo: "Mustang Mach-E", ano: "2023/01", basico: 600000, completo: 600000, vendidos: 101},
        {marca: "Volkswagen", modelo: "Saveiro", ano: "2023/01", basico: 63950, completo: 101390, vendidos: 3045},
        {marca: "Volkswagen", modelo: "Tarok", ano: "2023/01", basico: 254000, completo: 260000, vendidos: 200}
    ]
];

//Recebe uma data no formato dd/MM/yyyy 
//retorna true caso esteja nos ultimos 30 dias ou false se faz mais de 30
function fazUmMes(visitaCliente){
    let hoje = new Date();
    let [dia, mes, ano] = visitaCliente.split('/');
    let ultimaVisita = new Date(ano, mes - 1, dia);
    let umMesAtras = new Date();
    umMesAtras.setDate(hoje.getDate() - 30); // change to 30 days ago
    if (ultimaVisita >= umMesAtras && ultimaVisita <= hoje) { // check if within last 30 days
        return true
    } else {
        return false
    }
}

//nova lista apenas com quem aceita marketing e visitou a loja no último mês (ultimos 30 dias)
const emailsMarketing = listaClientes.filter((obj)=>(obj.aceitaMarketing === true && fazUmMes(obj.ultimaVisita) ))

//nova lista com os 3 lançamentos mais recentes
// const lancamentos = listaVeiculos.filter((obj)=>(obj.ano))
const sortedObjects = listaVeiculos.sort((a, b) => b.ano - a.ano);
console.log(sortedObjects)
// const mostRecentObjects = sortedObjects.slice(0, 3);
//nova lista com os mais vendidos do último ano


//nova lista com os mais vendidos de todos os tempos


//o mesmo carro não pode se repetir entre as listas



    // `
    //   De: news@carstore.com
    //   Para: ${listaClientes[0].email}
    //   Assunto: "oi"
    // `  
    // const body =`
    
    //   Olá ${listaClientes[0].nome}!

    //   Veja só esses lançamentos!
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada

    //   Os mais vendidos do último ano:
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada

    //   Os mais vendidos de todos os tempos:
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    //   Modelo, marca, valor básico, valor completo, valor da entrada
    
    //   Parcelamentos em até 64x com entrada de 10% do valor
    //   CarStore - Aqui você encontra o seu carro novo
    // `


/*

    TODO: 
    // Checar dia da semana atual.
    Função para criar o corpo do email com os novos veículos, os mais vendidos, e as condições para aquisição.
    Função para enviar email para cada um dos clientes visando o aceite e a ultima visita
    Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.
 */


/*
    diaEnvio("segunda")
    retorna true ou false de acordo com o dia setado
*/

function diaEnvio (dia){
    let envio
    switch (dia) {
        case "domingo": 
            envio = 0
        break;
        case "segunda": 
            envio = 1
        break;
        case "terca": 
            envio = 2
        break;
        case "quarta": 
            envio = 3
        break;
        case "quinta": 
            envio = 4
        break;
        case "sexta": 
            envio = 5
        break;
        case "sabado": 
            envio = 6
        break;
    
        default:
            envio = 1
            break;
    }
    let hoje = new Date()
    return hoje.getDay() === envio
}
