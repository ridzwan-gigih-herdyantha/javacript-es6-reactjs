// =======Arrow Function========
// Arrow Function digunakan untuk mempersingkat tulisan sebuah function menjadi => 

// contoh penulisan function biasa : 

//define function
const hello = function (name) {

        return`hello ${name}`;
}

//panggil function
console.log (hello('Ridzwan Gigih Herdyantha'))//<-- Output Ridzwan Gigih Herdyantha

// jika function diatas dijadikan arrow function : 

//define function
const hallo = (name , umur) => `Hello ${name} umur ${umur}`;

//panggil function
console.log (hallo('Ridzwan Gigih Herdyantha',15)) // <-- Output Hello Ridzwan Gigih Herdyantha umur 15

// Jika functionnya nilai baliknya berupa object, maka kita harus membungkus bodynya dengan tanda kurung
//define function
const holla = (name, umur) => ({
	status: 'OK',
	mesaage: `Hello $name umur ${umur}`
});

//JIka functionnya memiliki nilai lebih dari 1 baris kode, kita bisa membungkus body function dengan kurung kurawal 
//define function
const holle = name => {
    if (!name) {
            console.log('Name is required');
    }

    return `Hello ${name}`;

}