//==========[PROMISE]========
//---Promise adalah object yang mepresentasikan sebuah keberhasilan / kegagalan dari sebuah event yang bersifat 
// asynchronus dan terjadi di masa yang akan datang. Dan karena dinamakan promise atau kalau diterjemahkan adalah janji
// maka pasti ada suatu kondisi yaitu terpenuhi dan tidak terpenuhi dari janji tersebut.

// Dan di dalam promise ada 3 buah state yang harus kita ketahui yaitu :
// 1.fullfilled - keadaan yang terpenuhi
// 2.rejected - keadaan yang tidak terpenuhi
// 3.pending - yaitu waktu tunggu dari kedua keadaan di atas

// Dan untuk menjalankan keadaan diatas, maka ada sebuah callback yang bisa kita gunakan, yaitu (resolve) yang
// berarti janji telah terpenuhi dan (reject) ketika ada janji tidak terpenuhi Kemudian ada (finally) yaitu ketika waktu 
// tunggu telah selesai baik keadaan terpenuhi atau tidak

// Dan di dalam promise ada sebuah aksi yang bisa kita jalankan ketika kondisi tersebut terpenuhi (resolve) yaitu
// menggunakan then. Dan jika tidak terpenuhi (reject) yaitu menggunakan catch

// Contoh sederhananya : 

//define var
let done = true;

//define a promise
const task = new Promise((resolve,reject) => {

    if(done) {

        resolve('Task berhasil diselesaikan ');

    } else {

        reject('Task belum diselesaikan');

    }
});

// run promise
console.log(task);

// Diatas kita masih mendapatkan nilai dalam bentuk promise,bagaimana jika kita ingin mengambil nilai resolve
// dan reject-nya secara langsung ? Yups,kita bisa menggunakan then dan catch.Kurang lebih seperti ini : 

// run promise with action 
task
    .then(response => console.log(response))
    .catch(response => console.log(response))

// Sekarang jika dijalankan maka kita sudah bisa mengambil valuenya secara langsung