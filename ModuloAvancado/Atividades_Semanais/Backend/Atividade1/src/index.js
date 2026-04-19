function isPrime(number) { 
    let contador = 0;
    if (number <= 1) { 
        return false; 
    } 

    
    for (let i = 1; i <= number; i++) { 
        if (number % i === 0) { 
            contador ++;
        } 
    }
    if(contador === 2){
        return true;
    }else{
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