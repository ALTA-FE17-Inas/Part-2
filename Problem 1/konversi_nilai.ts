function studentScore(number: number) {
    if (number < 0 || number > 100) {
        return "Invalid score";
    } else if (number >= 80 && number <= 100) {
        return `Anda mendapatkan nilai A`;
    } else if (number >= 65 && number <= 79) {
        return `Anda mendapatkan nilai B+`;
    } else if (number >= 50 && number <= 64) {
        return `Anda mendapatkan nilai B`;
    } else if (number >= 35 && number <= 49) {
        return `Anda mendapatkan nilai C`;
    } else {
        return `Anda mendapatkan nilai D`;
    }
}

let score = 80;
console.log(studentScore(score));
