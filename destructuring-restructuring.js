//========== Destructuring Assigment ==========
// --Destrcturing digunakan untuk membuat sebuah variable-variable baru dari element yang ada dalam sebuah array / object

// contoh destructuring array 

//array 
const arr = ['Ridzwan','Alan','Bagas'];

//destructuring
const [name1,name2,name3]= arr ;

//print output
console.log(name1); // <-- Output Ridzwan
console.log(name2); // <-- Output Alan
console.log(name3); // <-- Output Bagas

// diatas pertama kita membuat seuah array bernama arr,
// setelah itu kita destructuring atau extract menjadi sebuah variable-variable baru

// contoh destrcturing dalam object

//object
const obj = {
            nama: 'Ridzwan Gigih Herdyantha',
            age : 15
};

//destructuring
const {nama , age} = obj ;

//print output
console.log(nama);
console.log(age);

//========= Restructuring Assigment ===========
//--Restructuring kebalikan dari Destructuring, yaitu digunakan untuk membuat object dari variable

// contohnya seperti ini :

//define variable
const nama1 = "Ridzwan Gigih Herdyantha";
const age1 = 15;

//restructuring
const object = {name1 ,age1};

//print
console.log(object);