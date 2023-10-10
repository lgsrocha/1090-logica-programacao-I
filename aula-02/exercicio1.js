/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = 2000;
let reajuste = 0;
let porcentual = 0;

if (salario < 1500) {
  porcentual = 0.2;
  reajuste = porcentual * salario;
} else if (salario >= 1500 && salario < 1700) {
  porcentual = 0.15;
  reajuste = porcentual * salario;
} else if (salario >= 1700 && salario < 2000) {
  porcentual = 0.1;
  reajuste = porcentual * salario;
} else {
  porcentual = 0.05;
  reajuste = porcentual * salario;
}

// console.log(
//   "Salário antes do reajuste: ",
//   salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
// );
// console.log("Salário depois do reajuste: ", salario + reajuste);
// console.log("Valor do aumento: ", reajuste);
// console.log("Porcentual do aumento: ", porcentual);

console.log(
  `
  Salário antes do reajuste: ${salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}
  Salário depois do reajuste: ${salario + reajuste}
  Valor do aumento: ${reajuste}
  Porcentual do aumento: ${porcentual}
  `
);
