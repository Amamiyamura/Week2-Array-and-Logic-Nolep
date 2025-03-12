// ## Soal 4

function pasanganTerbesar(num) {
    let numString = num.toString();
    let hasil = 0;
    for (i = 0; i < numString.length -1; i++) {
        let temp = 0;
        temp = numString[i] + numString[i+1];
        let nilai = parseInt(temp);
        if (nilai > hasil) {
            hasil = nilai;
        }
    }
    return hasil;
  }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99