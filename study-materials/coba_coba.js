// # contoh array 
// let animals = ["Singa", "Kucing", "Macan", "Ikan"];
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);

// ## Macam Macam method array
// Length
let anime = ["Kimetsu No Yaiba", "Tenshura", "Oregairu", "Hyouka"];
console.log("Penggunaan Length");
console.log(anime); // bisa juga dengan anime[1], anime[2] jika ingin mengambil per satuan

// Push()
anime.push("Roshidere", "Classroom of the Elite");
console.log("Penggunaan Push()");
console.log(anime);

// Pop()
anime.pop(); // otomatis menghapus 1 data paling kanan
console.log("Penggunaan Pop");
console.log(anime);

// shift
anime.shift();  // otomatis menghapus 1 data paling kiri
console.log("Penggunaan shift");
console.log(anime);

// unshift
anime.unshift("KNY", "Kaguya-sama wa Kokurasetai"); // otomatis menambah ke bagian kiri
console.log("Penggunaan unshift");
console.log(anime);

// splice()
anime.splice(3,0,"Guilty Crown");   // di index 3 menghapus 0 menambah Guilty Crown
console.log("Penggunaan splice");
console.log(anime);

// Slice()
// langsung masukkan / return ke var baru
let slicedAnime = anime.slice(1,3)    // potong array dari index 1 hingga 3 jadi yang kepotong cuma index 1 dan 2
console.log("Penggunaan Slice");
console.log(slicedAnime);