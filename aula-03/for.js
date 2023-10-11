// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);
}

// Omitindo primeira parte da declaração
// let i = 1;
// for (; i <= 10; i++) {
//   //   console.log(i);
// }

// Omitindo segunda parte da declaração
for (let i = 0; ; i++) {
  if (i >= 3) {
    break;
  }
  //   console.log(i);
}

// Omitindo terceira parte da declaração
for (let i = 0; i <= 3; ) {
  //   console.log(i);
  i++;
}

// Omitindo todas as partes da declaração
let i = 0;
for (;;) {
  if (i > 3) {
    break;
  }
  console.log(i);
  i++;
}

// Utilizando o for com mais de uma variável de controle
for (let i = 0, j = 10; i < 10; i++, j--) {
  //   console.log(i, j);
}

let palavra = "socorram me subi no onibus em marrocos";
palavra = palavra.split(" ").join("");
// console.log(palavra);
let ehPalindromo = true;
for (let i = 0, j = palavra.length - 1; i <= j; i++, j--) {
  if (palavra[i] !== palavra[j]) {
    ehPalindromo = false;
  }
}
// console.log(ehPalindromo);
