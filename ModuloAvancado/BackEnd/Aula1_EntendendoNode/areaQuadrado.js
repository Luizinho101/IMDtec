
const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculaAreaQuadrado(lado){
    console.log(`Área do quadrado ${lado * lado}`);
}

leitor.question("Informe o valor do lado do Quadrado : ", (n) =>{
    let valorInput = parseFloat(n)
    calculaAreaQuadrado(valorInput);
    leitor.close();
});
