// Rest Parameter digunakan jika kita ingin membuat sebuah function yang memiliki parameter yang tak terbatas
//Rest parameter ditandai dengan ... didalam parameter

// Contohnya : 
function sum(...rest) {
    let sum = 0;
    for (let number of rest) sum += number ;
    return sum ;
}

let x = sum(8, 9, 16, 25, 29, 100, 66, 77);
console.log(sum(x)); // <-- Output 326
// diatas kita bisa memasukan nilai berapapun ke x dan akan dijumlahkan terus di dalam function sum.
// Karena di dalam functon sum kita berikan parameter berupa Rest Parameter

// Rest Parameter juga bisa digabung dengan parameter lainnya, 
// dengan catatan harus ditaruh dipaling belakang di dalam parameter