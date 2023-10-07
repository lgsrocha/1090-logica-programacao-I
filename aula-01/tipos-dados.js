// String
let student = "Priscila";
// console.log(typeof student);

// Number
let age = 25;
// console.log(typeof age); // number

let weight = 92.58;
// console.log(typeof weight); // number

// BigInt
const lightSpeed = 300000n;
// console.log(typeof lightSpeed); // bigint

// Boolean
let isActive = true;
// console.log(typeof isActive); // boolean

// Undefined
let pet;
// console.log(pet);
// console.log(typeof pet);

// Null
let lastName = null;
// console.log(typeof lastName); // null?

const s1 = Symbol("foo");
const s2 = Symbol("foo");
// console.log(typeof s1); // symbol
// console.log(typeof s2); // symbol
// console.log(s1 === s2); // false
// console.log(s1); // Symbol(foo)
// console.log(s2); // Symbol(foo)

// Object
let client = {
  name: "José da Silva",
  address: {
    street: "Rua A",
    number: 15,
  },
};
client.age = 25;
// console.log(typeof client);

// Atribuição do valor por referencia
// let client2 = client;

// Atribuição por valor (Spread)
let client2 = { ...client };
client2.name = "Pedro Santos";
// console.log("Cliente 1:", client);
// console.log("Cliente 2:", client2);

// let address = client.adress;
// let { address, name } = client;
let { name, ...client3 } = client;
console.log(client3);
console.log(name);
