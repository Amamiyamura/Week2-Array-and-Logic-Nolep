// ## Soal 4

function tentukanDeretGeometri(arr) {
    let selisih = [];
    let sama = true;
    for (let i = 0; i < arr.length -1; i++) {
        selisih.push(arr[i+1] / arr[i]);
        for (let j = 0; j < selisih.length -1; j++){
            if (selisih[j] !== selisih[j+1]) {
                sama = false;
            }
        }
    }
    return sama;
  }

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false