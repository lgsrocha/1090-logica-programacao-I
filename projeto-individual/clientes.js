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
        {modelo: "Onix", marca: "Chevrolet", basico: 65000, completo: 76000, ano: "2022/11", vendidos: 5000},
        {modelo: "HB20", marca: "Hyundai", basico: 72000, completo: 82000, ano: "2021/10", vendidos: 4530},
        {modelo: "Corolla", marca: "Toyota", basico: 120000, completo: 140000, ano: "2022/08", vendidos: 2000},
        {modelo: "Golf", marca: "Volkswagen", basico: 95000, completo: 110000, ano: "2021/09", vendidos: 3000},
        {modelo: "Compass", marca: "Jeep", basico: 140000, completo: 160000, ano: "2022/11", vendidos: 2600},
        {modelo: "Creta", marca: "Hyundai", basico: 80000, completo: 95000, ano: "2022/12", vendidos: 2900},
        {modelo: "T-Cross", marca: "Volkswagen", basico: 90000, completo: 105000, ano: "2021/04", vendidos: 3230},
        {modelo: "Nivus", marca: "Volkswagen", basico: 85000, completo: 100000, ano: "2021/05", vendidos: 500},
        {modelo: "Kicks", marca: "Nissan", basico: 85000, completo: 100000, ano: "2022/12", vendidos: 4002},
        {modelo: "Renegade", marca: "Jeep", basico: 100000, completo: 120000, ano: "2021/08", vendidos: 1223},
        {modelo: "C3", marca: "Citroen", ano: "2023/09", basico: 62090, completo: 70690, vendidos: 4402},
        {modelo: "HRV", marca: "Honda", ano: "2023/08", basico: 130000, completo: 150000, vendidos: 4499},
        {modelo: "Polo Track", marca: "Volkswagen", ano: "2023/02", basico: 60000, completo: 70000, vendidos: 4994},
        {modelo: "City", marca: "Honda", ano: "2023/06", basico: 110000, completo: 120000, vendidos: 1023},
        {modelo: "Yaris Cross", marca: "Toyota", ano: "2023/04", basico: 153000, completo: 183900, vendidos: 1651},
        {modelo: "Montana", marca: "Chevrolet", ano: "2023/01", basico: 140000, completo: 150000, vendidos: 2034},
        {modelo: "Santa Cruz", marca: "Hiunday", ano: "2023/02", basico: 130000, completo: 145000, vendidos: 4002},
        {modelo: "Mustang Mach-E", marca: "Ford", ano: "2023/11", basico: 600000, completo: 600000, vendidos: 101},
        {modelo: "Saveiro", marca: "Volkswagen", ano: "2023/09", basico: 63950, completo: 101390, vendidos: 3045},
        {modelo: "Tarok", marca: "Volkswagen", ano: "2023/12", basico: 254000, completo: 260000, vendidos: 200}
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

function body(nome){
    const sortedObjects = listaVeiculos.sort((a, b) => {
        const aDate = new Date(`${a.ano}/01`);
        const bDate = new Date(`${b.ano}/01`);
        return bDate - aDate;
    }).slice(0, 3);

    const sortedByVendidos = listaVeiculos.sort((a, b) => {
        return b.vendidos - a.vendidos;
    }).slice(0, 3);

    let body = `
        Olá ${nome}!

        Veja só esses lançamentos!
        Modelo | Marca | Valor Básico | Valor Completo | Valor da Entrada
    `;
    sortedObjects.forEach((obj) => {
        body += `
            ${obj.modelo} | ${obj.marca} | ${obj.basico} | ${obj.completo} | ${obj.basico * 0.1}
        `;
    });

    body += `
        Os mais vendidos de todos os tempos:
        Modelo | Marca | Valor Básico | Valor Completo | Valor da Entrada
    `;
    sortedByVendidos.forEach((obj) => {
        body += `
            ${obj.modelo} | ${obj.marca} | ${obj.basico} | ${obj.completo} | ${obj.basico * 0.1}
        `;
    });

    body += `
        Parcelamentos em até 64x com entrada de 10% do valor
    `;

    return body;
}


function diaSemana (dia){
    let diaSemana
    switch (dia) {
        case 0: 
            diaSemana = "domingo"
        break;
        case 1: 
            diaSemana = "segunda"
        break;
        case 2: 
            diaSemana = "terca"
        break;
        case 3:
            diaSemana = "quarta"
        break;
        case 4: 
            diaSemana = "quinta"
        break;
        case 5: 
            diaSemana = "sexta"
        break;
        case 6: 
            diaSemana = "sabado"
        break;
    
        default:
            diaSemana = "segunda"
            break;
    }
    return diaSemana
}

module.exports={listaClientes,listaVeiculos,body,enviarEmail,emailsMarketing}