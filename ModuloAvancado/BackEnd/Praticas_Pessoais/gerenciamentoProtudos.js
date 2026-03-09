
const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


leitor.question("Informe um valor : ", function(valor){
    let valorIput = parseInt(valor);
    console.log(valorIput);
    leitor.close()
})