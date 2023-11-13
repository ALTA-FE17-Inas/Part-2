function palindrome(string: string){
    // Hapus spasi dan ubah ke huruf kecil untuk mempermudah perbandingan
    const stringAsli = string.replace(/\s/g, '').toLowerCase();

    // Bandingkan string dengan versi terbaliknya
    const stringDibalik = stringAsli.split('').reverse().join('');

    // Periksa apakah string asli sama dengan string terbalik
    return stringAsli === stringDibalik;
}

// Contoh penggunaan
console.log(palindrome("civic"));         // Output: true
console.log(palindrome("katak"));         // Output: true
console.log(palindrome("kasur rusak"));   // Output: true
console.log(palindrome("kupu-kupu"));     // Output: false
console.log(palindrome("lion"));          // Output: false
