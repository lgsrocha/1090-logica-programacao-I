// String para number
const num = 155e6;

const newNum = Number(num);
// console.log(newNum);
// console.log(typeof newNum);

const newNum2 = parseInt(num);
// console.log(newNum2); // 155
// console.log(typeof newNum2);

const newNum3 = +num;
// console.log(newNum3); // NaN
// console.log(typeof newNum3);

// Number para String
let documentNumber;
const formatedDocNumber = documentNumber.toString();
const formatedDocNumber2 = "" + documentNumber;
const formatedDocNumber3 = String(documentNumber);
console.log(typeof formatedDocNumber);
console.log(typeof formatedDocNumber2);
console.log(typeof formatedDocNumber3);
console.log(formatedDocNumber);
console.log(formatedDocNumber2);
console.log(formatedDocNumber3);
