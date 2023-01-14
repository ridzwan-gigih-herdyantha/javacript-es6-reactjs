//============SPREAD OPERATOR========='
//---Spread Operator ditandai dengan ...(titik tiga), dan digunakan untuk beberapa keperluan,
// yang pertama untuk meng-copy sebuah array dan yang kedua untuk menggabungkan sebuah array 

// Berikut ini contoh Spread Operator untuk mengcopy array 

// define array 1
const arr1 = [1, 2, 3, 4, 5];

//define array 2
const arr2 = [...arr1];

//print output
console.log('array 1', arr1)
console.log('array 2', arr2)

// Di atas kita membuat variable arr1 dengan isi arrau 1-5. Kemudian kita buat variable baru dengan nama arr2 
// yang mana isinya meng-Copy dari variable arr1 menggunakan spread operator ...arr1

// Berikut contoh Spread Operator untuk menngabungkan array 

//define array3
const arr3 = [1 , 2, 3];

//define array4
const arr4 = [4 , 5, 6];

//define array5
const arr5 = [7 , 8, 9];

//define array6
const arr6 = [...arr3 , ...arr4 , ...arr5];

//print array 6
console.log(arr6);

// Di atas kita membuat variable arr3-5 dengan isi arrau 1-9. Kemudian kita buat variable baru dengan nama arr6 
// yang berisi penggabungan isi dari arr3-5 
