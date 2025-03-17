// ## Soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let grup = [];
  let seen = [];
  animalsSort = animals.sort();
  for (let i = 0; i < animalsSort.length; i++){
    if (seen.includes(animalsSort[i])) continue;
    let hurufPertama = animalsSort[i].at(0);
    let hasil = [animalsSort[i]];
    for (let j = i + 1; j < animalsSort.length; j++){
        if (hurufPertama === animalsSort[j].at(0)){
            hasil.push(animalsSort[j]);
            seen.push(animalsSort[j]);
        }
    } grup.push(hasil);
  } return grup;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]