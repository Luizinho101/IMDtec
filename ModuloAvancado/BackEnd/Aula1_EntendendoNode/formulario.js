const readline = require('readline/promises');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciarConversa() {
    const nome = await leitor.question("Qual seu nome? ");
    const cidade = await leitor.question("Onde você mora? ");
    const idade = await leitor.question("Qual a sua idade?");
    const peso = await leitor.question("Qual o seu peso?");

    console.log(`\n--- Ficha de Cadastro ---`);
    console.log(`Nome: ${nome} | Cidade: ${cidade} | Idade: ${idade}  | Peso: ${peso}`);

    leitor.close();
}

iniciarConversa();