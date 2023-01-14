// Komponen dan Props di React,js

//Di dalam React semua user interface atau antar muka aplikasi dibangun menggunakan komponen.Jadi kesannya
// seperti LEGO, dimana dari komponen-komponen kecil dikombinasikan menjadi komponen yang sangat besar
// dan komponen yang paling atas di dalam react disebut dengan root, yaitu mempresentasikan aplikasi secara keseluruhan
// --Root = komponen paling atas di dalam react dan mempresentasikan aplikasi secara keseluruhan

//Dengan menggunakan konsep ini kita bisa membuat sebuah komponen yang bisa digunakan berulang kali 
// (reuseable) dibandingkan harus membuatnya secara berulang - ulang 

//Secara konsep komponen mirip dengan fungsi di javascript. Komponen menerima beberapa masukan (biasa disebut "props")
// dan  mengembaikan element React yang mendeskripsikan apa yang seharusnya tampil pada layar 

// Di dalam react ada 2 cara untuk membuat sebuah komponen, yaitu menggunakan function component dan class component

//============ Function Component & Class Component ===============

//Cara paling sederhana untuk mendefinisikan sebuah komponen adalah dengan menuliskan sebuah function component

// function Salam(props) {
//     return <h1>Hallo {props.name}</h1>;
// }

//Fungsi ini adalah komponen React yang sah karena menerima sebuah "props"tunggal (yang bertindak sebagai props)
// atau argumen objek dengan data dan kembalian sebuah element React. Kita menyebut komponen karena itu benar-benar 
// fungsi javascript

//Kita juga dapat menggunakan ES6 class untuk mendefinisikan sebuah component :

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hallo {this.props.name}</h1>
//     }
// }

//dari sudut pandang React , kedua komponen diatas mempunyai nilai yang sama. function dan class komponen
// mempunyai beberapa fitur tambahan yang biasa disebut state & lifecycle 

// ====================== PROPS ===========
// Props atau singkatan dari properties, yang mana mirip seperti attribute tag di html
//Props biasanya digunakan untuk mengirimkan sebuah data dari parent component dan child component

// >> Props dengan Function Component 

// Dalam pembuatan sebuah props, jika kita menggunakan function component maka props tsb adalah 
//parameter-nya . Contoh :

//Component A mengirim data dengan props "message"
< KomponenA message = "Hello World" />

// function component 
function KomponenA(props) { // <-- props sebagai parameter 

    return 
        {/* print props "message"  */}
        <p>{props.message}</p>
    
}

// Di atas, kita berikan contoh dalam pembuatan sebuah props di dalam function component, yaitu mengirikan 
//sebuah props yang bernama message dengan value "Hello World"

// Dan di dalam komponenA kita ambil props sebagai parameter dan kita baca nilainya di dalam method return
//dengan kode seperti ini props.message

// >> Props dengan Class Component

// Sekarang kita  akan mencoba membuat props menggunakan class component . Jika menggunakan class
// component, untuk mengakses props-nya kita bisa menggunakan keyword this. kurang lebih seperti berikut :

//Component B mengirim data dengan props "message"
<ComponentB message = "Hello World!"/>

//class component 
class ComponentB extends React.Component {
    render() {
        // print props "message" with "this"
        return <p>{this.props.message}</p>
    }
}

// Di atas , untuk membaca props di dalam class component kita membutuhkan keyword yang bernama this.