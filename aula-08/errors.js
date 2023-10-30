// let person = null;
// console.log(person.name);

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

function soma(n1, n2) {
  if (n1 <= 0 || n1 > 10) {
    throw new CustomError("Número 1 não permitido", 401);
  }
  return n1 + n2;
}

try {
  console.log(soma(5, 6));
} catch (error) {
  //   console.log(error.code);
  //   console.log(error.message);
  //   console.log(error.stack);
  if (error.code === 500) {
    console.log("Houve um erro.", error.message);
  } else if (error.code === 404) {
    console.log("O recurso não existe ou não foi encontrado.", error.message);
  } else {
    console.log("Impressora ocupada");
  }
} finally {
  console.log("Operação concluída!");
}
