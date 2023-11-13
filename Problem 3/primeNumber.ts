function primeNumber(number: number) {
    // Bilangan prima harus lebih besar dari 1
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(primeNumber(11)); // Output: true
console.log(primeNumber(13)); // Output: true
console.log(primeNumber(17)); // Output: true
console.log(primeNumber(20)); // Output: false
console.log(primeNumber(35)); // Output: false
