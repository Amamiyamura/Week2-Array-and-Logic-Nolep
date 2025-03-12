// ## Soal 2
/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    for (let i = num+1; i < num+11; i++) {
        angka = i;    // ini gunanya buat apa serius? oh buat angkanya jalan terus sesuai loop diatasmya
        StringAngka = angka.toString();     // ngubah angka jadi string dalam var StringAngka
        let terbalik = "";      // buat var baru terbalik
        for (let j = StringAngka.length; j > 0; j--) {      // loop buat mereverse StringAngka
            terbalik += StringAngka[j-1];       // Masukkan ke terbalik index dari StringAngka ke j - 1
        } 
        if (terbalik === StringAngka) {     // Pengkondisian jika terbalik = stringAngka return angka
            return angka;
        }
    }
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


