const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarMaioridade(idade) {
    if (isNaN(idade)) {
        console.log("Erro: Você não digitou um número válido.");
        return;
    }

    if (idade >= 18) {
        console.log(" Você é maior de idade !!!");
    } else {
        console.log(" Você é menor de idade !!!");
    }
}

leitor.question("Qual a sua idade? ", (resposta) => {
    const idadeInformada = parseInt(resposta);
    verificarMaioridade(idadeInformada);
    leitor.close();
});