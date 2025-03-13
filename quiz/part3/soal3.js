// ## Soal 3
//tentukan apakah ini deret aritmatika atau bukan

function tentukanDeretAritmatika(arr) {
    let selisih = [];
    let sama = true;
    for (let i = 0; i < arr.length - 1; i++) {
        selisih.push(arr[i+1] - arr[i]);
        for (let j = 0; j < selisih.length - 1; j++) {
            if (selisih[j] !== selisih[j+1]) {
                sama = false;
            }
        } 
    } return sama;
  }
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false