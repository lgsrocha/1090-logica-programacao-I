const exercicio = 14


switch (exercicio) {
    case 1:
        console.log("\n----------------------------------------------------")
        console.log("EX 1: push()")
        console.log("----------------------------------------------------\n")
        ex1()
        break;

    case 2:
        console.log("\n----------------------------------------------------")
        console.log("EX 2: pop()")
        console.log("----------------------------------------------------\n")
        ex2()
        break;

    case 3:
        console.log("\n----------------------------------------------------")
        console.log("EX 3: shift()")
        console.log("----------------------------------------------------\n")
        ex3()
        break;
    
    case 4:
        console.log("\n----------------------------------------------------")
        console.log("EX 4: at()")
        console.log("----------------------------------------------------\n")
        ex4()
        break;

    case 5:
        console.log("\n----------------------------------------------------")
        console.log("EX 5: concat()")
        console.log("----------------------------------------------------\n")
        ex5()
        break;
    
    case 6:
        console.log("\n----------------------------------------------------")
        console.log("EX 6: every()")
        console.log("----------------------------------------------------\n")
        ex6()
        break;  
    
    case 7:
        console.log("\n----------------------------------------------------")
        console.log("EX 7: filter()")
        console.log("----------------------------------------------------\n")
        ex7()
        break;

    case 8:
        console.log("\n----------------------------------------------------")
        console.log("EX 8: find()")
        console.log("----------------------------------------------------\n")
        ex8()
        break;

    case 9:
        console.log("\n----------------------------------------------------")
        console.log("EX 9: forEach()")
        console.log("----------------------------------------------------\n")
        ex9()
        break;

    case 10:
        console.log("\n----------------------------------------------------")
        console.log("EX 10: map()")
        console.log("----------------------------------------------------\n")
        ex10()
        break;


    case 11:
        console.log("\n----------------------------------------------------")
        console.log("EX 1: reduce()")
        console.log("----------------------------------------------------\n")
        ex11()
        break;

    case 12:
        console.log("\n----------------------------------------------------")
        console.log("EX 12: reverse()")
        console.log("----------------------------------------------------\n")
        ex12()
    break;

    case 13:
        console.log("\n----------------------------------------------------")
        console.log("EX 13: some()")
        console.log("----------------------------------------------------\n")
        ex13()
        break;

    case 14:
        console.log("\n----------------------------------------------------")
        console.log("EX 14: sort()")
        console.log("----------------------------------------------------\n")
        ex14()
        break;
    default:
        break;
}

function ex1 (){
    const array = [];
    console.log(`Declarado o array vazio: `,array)
    console.log(`Tamanho do array antes do push: ${array.length}`)
    array.push(1)
    array.push(2)
    console.log(`Tamanho do array depois do push: ${array.length}`)
    console.log(`Array após os pushs: `, array)
}

function ex2(){
    const numeros = [1, 2, 3, 4];
    console.log(`Array antes do pop: `,numeros)
    console.log(`Tamanho do array antes do pop: ${numeros.length}`)
    numeros.pop()
    console.log(`Tamanho do array depois do primeiro pop: ${numeros.length}`)
    numeros.pop()
    console.log(`Tamanho do array depois do segundo pop: ${numeros.length}`)
    console.log(`Array após os pops: `, numeros)
}

function ex3(){
    const array = ["javascript", "python", "golang", "java"];
    console.log(`Array declarado: `,array)
    console.log(`Tamanho do array antes do shift: ${array.length}`)
    array.shift()
    console.log(`Tamanho do array depois do primeiro shift: ${array.length}`)
    array.shift()
    console.log(`Tamanho do array depois do segundo shift: ${array.length}`)
    console.log(`Array após os shifts: `, array)

}


function ex4(){
    const array = ["sabao", "detergente", "amaciante", "alvejante", "sapolio"];
    console.log(`Array declarado: `,array)
    console.log(`Primeiro elemento do array: ${array.at(0)}`)
    console.log(`Terceiro elemento do array: ${array.at(2)}`)
    console.log(`Ultimo elemento do array: ${array.at(array.length -1)}`)
}

function ex5 (){
    const array = ["banana", "pera", "melancia"];
    const array2 = ["alface", "tomate", "rucula"];
    const array3 = ["limao", "laranja", "acerola"];
    const array4 = ["pimenta", "pimentao", "alho"];

    console.log(`Os arrays declarados:\n`,array,array2,array3,array4)
    console.log(`\nArray 1 + Array2:\n`, array.concat(array2))
    console.log(`\nTodos Arrays concatenados:\n`, array.concat(array2,array3,array4))
}

function ex6(){
    const array = [
        { nome: "João", idade: 22 },
        { nome: "Maria", idade: 17 },
        { nome: "Pedro", idade: 18 },
        { nome: "Ana", idade: 22 },
        { nome: "Carlos", idade: 16 },
      ];
    
    console.log("Array de objetos: ")
    array.forEach((obj)=>(console.log(`nome: ${obj.nome}, idade: ${obj.idade}`)))
    console.log("todos os alunos têm maior idade? ", array.every((obj)=>(obj.idade >= 18)))
    console.log("todos os nomes possuem 3 ou mais caracteres?", array.every((obj)=>(obj.nome.length >= 3)))
    console.log("todos os alunos possuem nome e idade definidos ?", array.every((obj)=>(obj.nome && obj.idade)))
}

function ex7(){
    const array = [
        { nome: "Ana", idade: 20 },
        { nome: "Pedro", idade: 18 },
        { nome: "Maria", idade: 22 },
        { nome: "João", idade: 17 },
        { nome: "Lucas", idade: 19 },
        { nome: "julia", idade: 21 },
      ];

    console.log("Array de Alunos original:")
    array.forEach((obj)=>(console.log(`nome: ${obj.nome}, idade: ${obj.idade}`)))

    console.log("\nArray maiorIdade:\n")
    const maiorIdade = array.filter((obj)=>(obj.idade >= 18))
    maiorIdade.forEach((obj)=>(console.log(`nome: ${obj.nome}, idade: ${obj.idade}`)))

    console.log("\nArray de alunos menores que 20 anos:\n")
    const menorDeVinte = array.filter((obj)=>(obj.idade < 20))
    menorDeVinte.forEach((obj)=>(console.log(`nome: ${obj.nome}, idade: ${obj.idade}`)))

    console.log("\nAlunos de nome iniciado em J:\n")
    const comecaComJ = array.filter((obj)=>(obj.nome[0].toLocaleUpperCase() === "J"))
    comecaComJ.forEach((obj)=>(console.log(`nome: ${obj.nome}, idade: ${obj.idade}`)))
}

function ex8(){
    const array = [
        { nome: "Sala de Reuniões", capacidade: 8 },
        { nome: "Sala de Treinamento", capacidade: 20 },
        { nome: "Sala de Conferências", capacidade: 30 },
        { nome: "Auditório", capacidade: 50 },
        { nome: "Sala de Estudos", capacidade: 12 },
      ];

    console.log("Array de Alunos original:")
    array.forEach((obj)=>(console.log(`nome: ${obj.nome}, capacidade: ${obj.capacidade}`)))

    const max10 = array.find((obj)=>(obj.capacidade >= 10))
    console.log("\nPrimeiro lugar com capacidade de 10 ou mais pessoas:\n", max10.nome, max10.capacidade)

    const max25 = array.find((obj)=>(obj.capacidade >= 25))
    console.log("\nPrimeiro lugar com capacidade de 25 ou mais pessoas:\n", max25.nome, max25.capacidade)

    const max40 = array.find((obj)=>(obj.capacidade >= 40))
    console.log("\nPrimeiro lugar com capacidade de 40 ou mais pessoas:\n", max40.nome, max40.capacidade)
}

function ex9(){
    const array = [
        { sabor: "Mussarela", valor: 20 },
        { sabor: "Calabresa", valor: 25 },
        { sabor: "Marguerita", valor: 28 },
        { sabor: "Frango com Catupiry", valor: 32 },
        { sabor: "Portuguesa", valor: 30 },
      ];
    
    array.forEach((obj)=>(console.log(`Sabor: ${obj.sabor}, Valor: ${obj.valor}`)))
}

function ex10(){
    const array = [
        { nome: "João", altura: 1.75, peso: 80 },
        { nome: "Maria", altura: 1.68, peso: 60 },
        { nome: "Pedro", altura: 1.8, peso: 70 },
        { nome: "Ana", altura: 1.65, peso: 55 },
        { nome: "Carlos", altura: 1.9, peso: 100 },
      ];

    const nomeImc = array.map((aluno)=>{
        let imc = (aluno.peso / (aluno.altura * aluno.altura )).toFixed(2)
        return {
            nome: aluno.nome,
            imc: imc
            };
    }
    )
    nomeImc.forEach((obj)=>(console.log(`Aluno: ${obj.nome}, IMC: ${obj.imc}`)))
}

function ex11(){
    const array = [
        { nome: "Ana", notas: [7, 8, 9] },
        { nome: "Pedro", notas: [5, 6, 7] },
        { nome: "Maria", notas: [9, 8, 10] },
        { nome: "João", notas: [6, 7, 8] },
        { nome: "Lucas", notas: [8, 9, 7] },
        { nome: "Julia", notas: [10, 8, 9] },
      ];
      
    const nomeMedia = array.map((obj)=>{
        let mediaAluno = obj.notas.reduce((a , b) => (a + b))

        return {
            nome: obj.nome,
            media: mediaAluno/obj.notas.length
        };
    })

    nomeMedia.forEach((obj)=>(console.log(`Aluno: ${obj.nome}, Media: ${obj.media}`)))
}

function ex12(){
    const array = [1, 2, 3, 4, 5];

    console.log(`Array antes do reverse: `,array)
    array.reverse()
    console.log(`Array após o reverse: `,array)

}

function ex13(){
    const array = [
        { nome: "João", salario: 1200 },
        { nome: "Maria", salario: 1500 },
        { nome: "Pedro", salario: 1800 },
        { nome: "Ana", salario: 1400 },
        { nome: "Carlos", salario: 2000 },
      ];
      
    const maiorQue1500 = array.some((obj) => obj.salario >= 1500);
    console.log("Há algum salário maior ou igual a 1500?",maiorQue1500);

    const menorQue1000 = array.some((obj) => obj.salario <= 1000);
    console.log("Há algum salário menor ou igual a 1000?",menorQue1000);
}

function ex14(){
    const atletas = [
        { nome: "João", altura: 1.75, peso: 80 },
        { nome: "Maria", altura: 1.68, peso: 60 },
        { nome: "Pedro", altura: 1.8, peso: 70 },
        { nome: "Ana", altura: 1.65, peso: 55 },
        { nome: "Carlos", altura: 1.9, peso: 100 },
    ];

    const atletasPorPeso = atletas.sort((a, b) => a.peso - b.peso);
    console.log("Atletas ordenados por peso:", atletasPorPeso);

    const atletasPorAltura = atletas.sort((a, b) => b.altura - a.altura);
    console.log("Atletas ordenados por altura:", atletasPorAltura);

    const atletasPorNome = atletas.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log("Atletas ordenados por nome:", atletasPorNome);

    console.log("Atletas originais:", atletas);
}