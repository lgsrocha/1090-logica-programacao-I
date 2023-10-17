const numbers = [3, 11, 4, 12, 15, 5, 9, 2, 6, 5, 3, 5];
// numbers.sort();
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const alunos = ["Zilda", "Pedro", "Tiago", "João", "Amaro", "Álvaro"];
alunos.sort((a, b) => a.localeCompare(b));
console.log(alunos);
