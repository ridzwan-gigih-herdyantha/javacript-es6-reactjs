//<--- function yang memiliki parameter berifat opsional
// penulisan function 
// ====== Sebelum ada ES6
// function hello(message) {
    
//     let message = message || 'Hello World !!';

//     console.log(message);

// }

// //panggil function tanpa parameter
// console.log(hello()); // <-- Output Hello World !!

// //panggil function dengan parameter
// console.log(hello("Belajar ES6"));

//======== Sesudah ada ES6
function hello(message = "Hello World !") {
    
    console.log(message);
    
}

//panggil function tanpa parameter
console.log(hello()); //  <--- Output "Hello WOrld !"

//panggil function dengan parameter
console.log(hello('Belajar ES6')); // <-- Output "Belajar ES6"