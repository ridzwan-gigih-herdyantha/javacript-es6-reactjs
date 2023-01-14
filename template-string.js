// Template String / Template Literal adalah cara / teknik yang digunakan untuk memanggil sebuah variable di salam string. 
//kita harus menggunakan backtick (``)

// contoh menggabungkan string dan variable tanpa template string 
let name = "Ridzwan Gigih Herdyantha";

let gender = "Laki-laki";

console.log(name + ' memiliki jenis kelamin : ' + gender);

// penulisan yang lebih mudah dengan menggunakan template string

console.log(`${name} memiliki jenis kelamin : ${gender}`); 

//output "Ridzwan Gigih Herdyantha memiliki jenis kelamin : Laki-laki"
// hasilnya sama namun penulisannya sederhana. Karena untuk menampilkan variable 
// hanya menggunakan sintaks ${ namaVariable } di dalam backtick(``)