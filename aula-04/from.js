const str = "hello";
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 2);

// console.log(map);

const arrFromStr = Array.from(str, (letter) => letter.toUpperCase());
// Resultado: ["H", "E", "L", "L", "O"]
console.log(arrFromStr);
console.log(typeof arrFromStr);

const arrFromMap = Array.from(map, ([key, value]) => ({ key, value }));
// Resultado: [{ key: "a", value: 1 }, { key: "b", value: 2 }]
console.log(arrFromMap);
