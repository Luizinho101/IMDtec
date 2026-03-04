const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mediaDasNotas(nota1 , nota2){
    let media = (nota1 + nota2 )/ 2;
    console.log("Media das Notas : "+media);
}

leitor.question("Nota 1 ", (n1) => {
    const nota1 = parseFloat(n1);

        leitor.question("Nota 2 ", (n2) => {
        const nota2 = parseFloat(n2);
        mediaDasNotas(nota1, nota2);
        leitor.close();
    });

});

