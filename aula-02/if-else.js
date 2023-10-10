const age = 45;

if (age >= 16 && age < 18) {
  console.log("Usuário maior de idade");
} else if (age >= 18) {
  console.log("Usuário deverá votar");
} else {
  console.log("Não possui idade para votar");
}

// Operadoes lógicos
const diaClaro = false;
const tenhoDinheiro = true;

if (diaClaro && tenhoDinheiro) {
  //   console.log("Oba! Vou ali na praia!");
} else {
  //   console.log("Deu ruim!");
}

if (diaClaro || tenhoDinheiro) {
  //   console.log("Oba! Vou ali na praia!");
} else {
  //   console.log("Deu ruim!");
}

// Bitwise (xor - OU Exclusivo)
const a = 5; // 101
const b = 3; // 011
// console.log(a ^ b); // 110

// Operador ternário
if (diaClaro && tenhoDinheiro) console.log("Oba! Vou ali na praia!");
else console.log("Deu ruim!");

diaClaro && tenhoDinheiro
  ? console.log("Oba! Vou ali na praia!")
  : console.log("Deu ruim!");

age >= 16 && age < 18
  ? console.log("Usuário maior de idade")
  : age >= 18
  ? console.log("Usuário deverá votar")
  : console.log("Não possui idade para votar");

//   Exemplo de retorno de uma função, usando ternário
function vouParaAPraia() {
  return diaClaro && tenhoDinheiro ? true : false;
}
