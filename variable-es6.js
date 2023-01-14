//===============Variable di dalam ES6 ======
//---> keyword const = variable yang nilainya tetap dan tidak bisa berubah
//define variable

// const name = "Ridzwan Gigih Herdyantha";
//try to change
//name = "Raizher";

// jika di jalankan akan eror karena variable name tidak bisa diubah
//---> keyword let = mirip dengan var dimana nilainya bisa dirubah rubah
// bedanya var mengenal sistem functional scope (variable yang bisa diakses di luar scope)
// sedangkan let mengenal sistem block scope (variable yang hanya diakses didalam scope)

var name = "Ridzwan Gigih Herdyantha";

if (true) {
    var name = 'Ahmad';
    console.log(name); // <-- Output Ahmad
}
console.log(name); // <-- Output Ahmad

//mencetak ahmad karena variable name  di dalam if mengalami override / hoisting / pengangkatan jadi seolah-olah kodenya seperti ini :
var name = "Ridzwan Gigih Herdyantha";
var name = "Ahmad";

if (true) {
        console.log(name); // <-- Output Ahmad
}

console.log(name); // <-- Output Ahmad

// Untuk mengatasi problem seperti ini kita menggunakan let dengan tujuan agar tidak ada hoistin dan tidak bertabrakan

var name = "Ridzwan Gigih Herdyantha"

if (true) {
    let name = "Ahmad"
    console.log(name); //<-- Output Ahmad
}

console.log(name); // Output Ridzwan Gigih Herdyantha

/*  
    CATATAN :
    Jika variable yang dibuat menggunakan var,let dan const tidak ditentukan block scopeya
    maka otomatis bersifat global dan bisa diakses dimana saja
*/