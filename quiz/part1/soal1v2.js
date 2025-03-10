// ## Soal 1
// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input) {
    let hasil = [];
    for (let i = 0; i < input.length; i++) {
        let id = input[i][0];
        let nama = input[i][1];
        let ttl = (input[i][2] + " " + input[i][3]);
        let hobi = input[i][4];
        hasil += `\nNomor ID:   ${id} \nNama lengkap:   ${nama}\nTTL:   ${ttl}\nHobi:   ${hobi}\n`; 
    } return hasil;
}
console.log(dataHandling(input));
