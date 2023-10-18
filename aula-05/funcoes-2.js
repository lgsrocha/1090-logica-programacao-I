function main() {
  //   function soma(a, b) {
  //     return a + b;
  //   }

  const soma = function (a, b) {
    return a + b;
  };
  console.log("Soma escopo interno", soma(2, 3));
}

console.log("Soma escopo externo", soma(5, 6)); // soma is not defined

main();
