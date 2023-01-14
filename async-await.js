//====Async Await

//--Async await adalah fitur baru dari ES2017. Fitur ini digunakan untuk menangani promise dengan lebih singkat dan efisien

//--Async atau Asynchronus Function merupakan sebuah fungsi yang bekerja secara asynchronus (melalui event loop),
// yang menghasilkan sebuah promise sebagai return value-nya, dimana kode yang ditulis seperti kode yang bersifat 
// synchronus (standart).

// Sebuah Async Function dapat memiliki keyword await di dalamnya,
// yang digunakan untuk memberhentikan eksekusi sementara sambil menunggu promisenya selesai / resolve

// Contohnya seperti berikut ini

//define a promise with 3 seconds
const taskPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Selesai'),3000)
    })
}

// define function 'task' with async
const task = async() => {
    const done = await taskPromise();
    console.log(done);
}

//print
console.log('Mulai');
task();
console.log('Akhir');

// Penjelasan : 
// Di atas , pertama kita  buat sebuah promise yang melakukan return berupa resolve dengan text selesai dalam 
// waktu 3000 miliseconds atau 3 detik
// code :

    //     return new Promise(resolve => {
    //     setTimeout(() => resolve('Selesai'),3000)
    //     })

// Kemudian kita buat function baru dengan nama task dengan jenis asynchronus, yaitu di tandai dengan keyword async.
// Dan didalamnya kita buat variable baru dengan nama done yang berisi keyword await yang memanggil promise taskPromise
// code :

    // const task = async() => { <-- add async keyword
    //     const done = await taskPromise(); <-- add await keyword

//Kemudian kita panggil function async tersebut dengan urutan kedua . Dan hasilnya akan ditampilkan setelah 3 detik
// code :
    // console.log('Mulai');
    // task();  <-- async
    // console.log('Akhir');

