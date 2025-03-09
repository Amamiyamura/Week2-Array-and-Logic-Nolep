# Week 2: Array dan Logic

## Hal hal yang dipelajari
1. cara membuat dan menginisialisasi array
2. mengakses elemen array
3. menambahkan dan menghapus elemen array (push, pop, shift, unshift)
4. menggabungkan dan memotong array
5. iterasi melalui array dengan loop
6. penerapan logika kondisional dalam array
7. penggunaan array dalam fungsi
8. latihan dan studi kasus

## Array dan methodnnya
Array => kumpulan berbagai data, array itu seperti list, bisa menampung banyak data pada satu variabel array
array lebih baik digunakan untuk menampung var dengan 1 tipe data yang sama
contoh membuat dan mengakses array:
``` js
let animals = ["lion", "cat", "tiger", "fish"];
console.log(animals[0], animals[1], animals[2], animals[3]);
```
### Macam - macam array method
- length => mengukur panjang array
``` js
arr.length
```
- push() => memasukkan data ke array di bagian terakhir list
``` js
arr.push(item1, item2, item3);
```
- pop() => menghapus data di bagian terakhir list array
``` js
arr.pop()
```
- shift() => menghapus data di bagian pertama list array
``` js
arr.shift()
```
- unshift() => menambah data di bagian pertama list array
``` js
arr.unshift(item1, item2)
```
- splice() => untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
``` js
array.splice(index, berapaBanyak, item1, ….., itemX)
```
- slice() => mengambil satu atau beberapa data dari array
``` js
const fruits = ['apple', 'banana', 'cherry']
fruits.slice(0, 2)
```
lebih lengkapnya: [W3School Array Method](https://www.w3schools.com/js/js_array_methods.asp)

1) Method Length
=> me-return nilai total elemen / item yang ada pada array
``` js
let vtuber = ["kobo", "zeta"];
console.log(vtuber.length); // output 2
```
2) Method Push()
=> memasukkan data pada urutan terakhir array / paling kanan
```js
let vtuber = ["kobo", "zeta"];
vtuber.push("Moona");
console.log(vtuber); // output ["kobo", "zeta", "Moona"]
```
3) Method Pop()
=> menghapus elemen terakhir pada array / paling kanan
```js
let vtuber = ["kobo", "zeta", "Moona"];
vtuber.pop();
console.log(vtuber); // output ["kobo", "zeta"]
```
4) Method shift()
=> menghapus elemen pertama pada array / paling kiri
```js
let vtuber = ["kobo", "zeta"];
vtuber.shift();
console.log(vtuber); // output ["zeta"]
```

5) Method unshift()
=> menambah elemen pertama pada array / paling kiri
``` js
let vtuber = ["zeta"];
vtuber.unshift("kobo");
console.log(vtuber); // output ["kobo", "zeta"]
```

6) Method splice()
=> bisa digunakan untuk menambah data, menghapus data, atau keduanya sekaligus
contoh:
vtuber.splice(1, 0, "Moona")
> Parameter pertama (1) => penentuan posisi mau di index ke berapa
> Parameter kedua (0) => penentuan mau menghapus berapa data / elemen / item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
> Parameter ketiga ("Moona") => untuk nambahin data ke dalam array, jumlahnya bisa banyak

```js
// Menambah 1 data dan menghapus 0
let vtuber = ["kobo", "zeta"];
vtuber.splice(1, 0, "Moona");
console.log(vtuber); // output ["kobo", "Moona", "zeta"]
// Menambah 1 dan menghapus 2
let vtuber = ["kobo", "zeta"];
vtuber.splice(0, 2, "Moona");
console.log(vtuber); // output ["Moona"]
// Menambah 3 dan menghapus 2
let vtuber = ["kobo", "zeta"];
vtuber.splice(0, 2, "Moona", "Risu", "Mitty");
console.log(vtuber); // output ["Moona", "Risu", "Mitty"]
```

7) Method Slice()
=> berfungsi memotong array tergantung dari nilai parameter
contoh: 
`vtuber.slice(1,4)`
> Parameter pertama (1) => penentuan mau motong array dari mana
> Parameter kedua (4) => penentuan ujung array yg kita potong

``` js
// contoh memotong dari index 1 sampai ujung
let vtuber = ["kobo", "zeta", "Moona", "Risu", "Mitty"];
vtuber.slice(1);
console.log(vtuber); // output ["kobo", "zeta", "Moona", "Risu", "Mitty"]
```
karena method slice ngga merubah array asli, jadi perlu ditampung di variabel baru

``` js
let vtuber = ["kobo", "zeta", "Moona", "Risu", "Mitty"];
// bisa langsung taro di output
console.log(vtuber.slice(1)); // output ["zeta", "Moona", "Risu", "Mitty"]
// tampung di variabel baru
let slicedVtuber = vtuber.slice(1);
console.log(sliceVtuber); // output ["zeta", "Moona", "Risu", "Mitty"]
```
umumnya digunakan dengan menampung di var baru

``` js
// Contoh memotong dari index 1 sampai sebelum index ke 3
// dengan kata lain
// Contoh memotong dari index 1 sampai index 2
let vtuber = ["kobo", "zeta", "Moona", "Risu", "Mitty"];
let slicedVtuber = vtuber.slice(1, 3);
console.log(slicedVtuber); // output ["zeta", "Moona"]
```