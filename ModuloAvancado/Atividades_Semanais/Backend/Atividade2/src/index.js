const logger = require('./utils/logger');

function isPrime(number) { 
    const start = Date.now();
    logger.debug(`Verificando se ${number} é primo`);

    let contador = 0;

    if (number <= 1) { 
        logger.info(`${number} não é primo (menor ou igual a 1).`);
        return false; 
    } 

    for (let i = 1; i <= number; i++) { 
        if (number % i === 0) { 
            contador++;

            if (i !== 1 && i !== number) {
                logger.info(`${number} não é primo, divisível por ${i}`);
                const end = Date.now();
                logger.info(`Tempo de execução: ${end - start}ms`);
                return false;
            }
        } 
    }

    if (contador === 2) {
        const end = Date.now();
        logger.info(`${number} é primo`);
        logger.info(`Tempo de execução: ${end - start}ms`);
        return true;
    } else {
        const end = Date.now();
        logger.info(`${number} não é primo`);
        logger.info(`Tempo de execução: ${end - start}ms`);
        return false;
    }
}

const numbersToCheck = [2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log("Números primos:"); 

for (const number of numbersToCheck) { 
    if (isPrime(number)) { 
        console.log(number); 
    } 
}