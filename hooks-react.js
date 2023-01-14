// >> React Hooks -- Function Component
// fitur ini memungkinkan kita menggunakan fitur - fitur yang ada di React js tanpa menggunakan class component

// Hooks merupakan fungsi yang memungkinkan kita untuk "mengaitkan" state dan fitur - fitur lifecycle React di
// Function Component . Hooks tidak akan berfungsi di Class Component

// Berikut perbedaan antara Lifecycle dan Hooks yang ada di React 

// |          Lifecycle (ClassComponent)             |           Hooks (FunctionComponent)                 |
// |-------------------------------------------------|-----------------------------------------------------|
// | Dikenalkan sejak React versi awal               | Dikenalkan sejak React versi 16.8 di tahun 2018     |
// | Bekerja dengan Javascript ES5                   | Bekerja dengan Javascript ES6 dan yang lebih baru   |
// | Berbasis Class Component                        | Berbasis Function Component                         |
// | Membutuhkan constructor untuk inisialisasi      | Tidak membutuhkan constructor                       |
// | Membutuhkan keyword this untuk update state     | Tidak membutuhkan keyword this untuk update state   |

// Hooks akan kita pakai karena lebih simple dan mudah dibandingkan menggunakan Class Component.
// kita akan sering menggunakan 2 hook yaitu : useState dan useEffect

// >> useState
//useState dipanggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan
// state antar render. useState memberikan dua hal : nilai state saat ini dan fungsi untuk memperbarui nilai tersebut

//define a state
const [count , setCount ] = useState(0);

//Di atas, count merupakan state yang digunakan untuk menyimpan nilainya sedangkan setCount adalah method
// yang digunakan untuk memperbarui nilai dari state tersebut. Dan untuk useState(0) adalah nilai default 
// yang kita berikan pada state tersebut

// contoh menggunakan useState untuk melakukan perhitungan 

//import hook "useState" dari React 
import React, {useState} from 'React'

function example() {
    
    // Deklarasi sebuah variable state baru , dimana dinamakan "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* cetak state count */}
            <p> Anda klik sebanyak {count} kali </p>

            {/* handleButton click */}
            <button onClick={() => setCount(count + 1)}>
                klik saya 
            </button>
        </div>
    )
}

// Di atas saat ada button di click maka akan menjalankan handler dari state yaitu setCount. dimana berisi nilai state
// yang ada dan ditambahkan angka 1
setCount(count + 1)

// >> useEffect 
//Kita tentunya pernah melakukan pengambilan data, berlangganan data(subscription), atau secara manual
// mengubah DOM dari komponen React sebelumnya. Teknik seperti ini dinamakan dengan "efek samping(side effects)"
// (atau singkatnya "efek(effects)")  karena dapat mempengaruhi komponen lain dan tidak dapat dilakukan pada saat proses render

//Effect Hook, useEffect, menambahkan kemampuan untuk melakukan "efek samping" dari sebuah Function Component
//Hook ini memiliki fungsi yang sama dengan componentDidMount , componentDidUpdate ,dan componentWillUnmount 
//yang ada pada Class Component React, tetapi disatukan mernjadi satu API 

// Contoh komponen berikut menetapkan judul halaman setelah React memperbarui DOM :
import React, { useState,useEffect } from 'react' ;

function Example() {
    const [ count,setCount ] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click
            </button>
        </div>
    );
}

// Di atas , pada hook useEffect akan selalu dijalankan ketika ada perubahan baik tampilan atau data di dalam 
// komponen

// Jika button di klik akan melakukan update nilai state count dan di dalam hook useEffect melakukan set judul halaman 
// dengan data state yang telah diperbarui 

// Hook useEffect biasa kita gunakan untuk menjalankan kode pada waktu :

    // 1. Komponen ditampilkan pertama kali (mounted)
    // 2. Ada sebuah perubahan yang terjadi pada state atau props

useEffect(() =>{
    // kode dijalankan waktu komponen pertama kali ditampilkan
},[])

useEffect(()=> {
    // kode dijalankan waktu mystate dan myprop berubah 
},[mystate,myprop])


