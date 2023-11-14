function palindrome(stringDibalik: string): boolean {
    const a = stringDibalik.length;
    // catatan pribadi.. atau bisa juga pake let i = 0; i < a / 2; i++
    for (let i = 0; i < Math.floor(a / 2); i++) { 
        if (stringDibalik[i] !== stringDibalik[a - i - 1]) {
            return false;
        }
    }
            return true;

    
    /**
        bisa pakai cara ini
    */ 
    
    // let/var stringAsli = "";
    // for (let/var i = stringDibalik.length - 1; i >= 0; i--) {
    //     stringAsli += stringDibalik[i];
    // }
    
    // if (stringAsli === stringDibalik) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(palindrome("radar"));
console.log(palindrome("civic"));         
console.log(palindrome("katak"));         
console.log(palindrome("kasur rusak"));   
console.log(palindrome("kupu-kupu"));     
console.log(palindrome("lion"));          

/**
        bisa juga pakai cara ini
*/
// function palindrome(string: string){
//     // Hapus spasi dan ubah ke huruf kecil untuk mempermudah perbandingan
//     const stringAsli = string.replace(/\s/g, '').toLowerCase();

//     // Bandingkan string dengan versi terbaliknya
//     const stringDibalik = stringAsli.split('').reverse().join('');

//     // Periksa apakah string asli sama dengan string terbalik
//     return stringAsli === stringDibalik;
// }
