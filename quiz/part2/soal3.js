// ## Soal 3

function hitungJumlahKata(kalimat) {
    let jumlahKata = 0;     // you can only write your code here!
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            jumlahKata++;
        }
    } return jumlahKata + 1;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

