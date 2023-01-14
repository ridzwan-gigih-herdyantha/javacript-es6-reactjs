//Array Map
//digunakan untuk membuat perulangan dari sebuah array dengan mengembalikan array baru tanpa memodifikasi array sumbernya.
// Array.map akan sering digunakan untuk melakukan perulangan data 

// Berikut contoh penggunakan Array.map

//define array 
const arr = [1,2,3,4,5,6,7];

//looping
const number = arr.map( value =>{
    return value;
});

//print output
console.log(number);

// Di atas pertama kita membuat variable arr dengan isi angka 1-7 dengan jenis array.
// kemudian kita looping menggunakan arr.map() dan key yang kita gunakan untuk mendapatkan datanya adalah value.

// kemudian kita print hasilnya dengan memanggil variable number, maka hasilnya akan sama.