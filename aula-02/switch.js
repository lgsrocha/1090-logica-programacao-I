const hoje = new Date();
console.log(hoje);

const diaDaSemana = hoje.getDay();
console.log("diaDaSemana", diaDaSemana);

const mesAtual = hoje.getMonth();
console.log("mesAtual", mesAtual);

// switch (diaDaSemana) {
//   case 0:
//     console.log("Domingo");
//     break;
//   case 1:
//     console.log("Segunda-feira");
//     break;
//   case 2:
//     console.log("Terça-feira");
//     break;
//   case 3:
//     console.log("Quarta-feira");
//     break;
//   case 4:
//     console.log("Quinta-feira");
//     break;
//   case 5:
//     console.log("Sexta-feira");
//     break;
//   case 6:
//     console.log("Sábado");
//     break;

//   default:
//     console.log("não é um dia válido");
//     break;
// }

switch (mesAtual) {
  case 11:
  case 0:
  case 1:
    console.log("Verão");
    break;
  case 2:
  case 3:
  case 4:
    console.log("Outono");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Inverno");
    break;
  case 8:
  case 9:
  case 10:
    console.log("Primavera");
    break;
}
