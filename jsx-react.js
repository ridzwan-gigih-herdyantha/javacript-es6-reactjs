// contoh syntax jsx 
const element = <h1>Halo,Dunia</h1>

// syntax ini (jsx) adalah sebuah sintaks ekstensi untuk JavaScript.Kita disarankan menggunakannya 
// dengan React untuk mendeskripsikan bagaimana antar muka pengguna seharusnya terlihat 

// >> Mengapa JSX
// React mengaku bahwa logika rendering akan secara inheren digabungkan dengan logika antarmuka pengguna lainnya.
// bagaimama event akan ditangani , bagaimana state akan berubah seiring dengan waktu dan bagaimana data disiapkan untuk tampilan

// Dengan menggunakan JSX kita bisa menyelesaikan permasalahan tersebut dibandingkan dengan membuat logika
// dan antar muka pengguna di file yang terpisah, karena kita bisa membuat keduanya secara bersamaan di dalam
// sebuah komponen

// Kebanyakan orang merasa terbantu dengan adanya JSX sebagai bantuan visual saat megerjakan antarmuka pengguna di dalam kode Javascript
//Menggunakan JSX juga memungkinkan React untuk menampilkan pesan kesalahan (eror) dan peringatan (warning) yg lebih bermanfaat 

// Dalam contoh dibawah ini kita mendeklarasikan variable name dan 
// kemudian menggunakannya di dalam jsx dengan cara membungkusnya di dalam tanda kurung kurawal (curly braces)

//Define variable name 
const name = ' Budi '

//panggil variable name
const element1 = <h1>Hallo {name} </h1>

React.DOM .render (
    element1,            // render variable element
    document.getElementById('root')
);

// >>  JSX harus punya container
// Di dalam JSX jika return-value memiliki lebih dari satu element lagi ahrus dibungkus dengan container 
// Bentuknya bisa menggunakan element HTML seperti <div> , React.Fragment , atau Array

// Karena di dalam return-value terdapat lebih dari satu element tanpa ada sebuah container yang membungkusnya  
// Kode akan error 

function App() {
    
    return ( 
        //menggunakan container div
        <div> 
            {/* Menggunkan container React.Fragment */}
            <React.Fragment>
                {/* Menggunakan Array */}
                [
                    {/* Menggunakan Empty Tag */}
                    <>
            <p> Belajar React JS </p>
            <p> Di youtube </p>
                    </>
                ]
            </React.Fragment>
        </div>
    )
}

// >> Penulisan Attribute Class HTML di JSX

// Di dalam JSX tidak disarankan menggunakan attribute bernama class, karena nama tersebut
//merupakan keyword yang ada di Javascript. Sebagai gantinya kita disarankan menggunakan nama className.
//Contohnya :
// penulisan class yang benar dalam JSX
function App() {

    return  (
        <div className = "app">
                <p> Belajar React </p>
                <p> Di Youtube </p>
        </div>
    )
}

// kalau di jsx kita harus mengganti variable class menjadi className

// >> Inline Style di dalam jsx
//Di dalam JSX untuk membuat inline style menggunakan css harus berupa object dan 
// nama attribute dari cssnya menjadi camelCase
// Contoh :

function app() {
    
    return (
        <div className="app">
            <p style={{ backgrounColor : 'red' }}> Belajar React </p>
            <p>Di Youtube</p>
        </div>
    )
}

// **********
// Tanda kurung kurawal (...) berarti teks di dalamnya adalah kode Javascript ,  bukan teks biasa 

// >> Penulisan Event Handler di JSX
// Di dalam HTML kita biasanya menuliskan beberapa eventHandler seperti berikut ini : onClick , onFocus dll

//Nah di dalam JSX untuk menuliskan eventHandler tersebut kita ubah menjadi camelCase.
// Contoh 
function App() {
 
    const handleClick = () => alert('Clicked !!')
    return (
        <div className= 'App'>
                <button onClick= {handleClick}> My BU=utton </button>
        </div>
    )
}

//  >> Kondisional di dalam JSX 
// JSX sangat mendukung apa yang disebut dengan kondisional rendering, yaitu membuat sebuah logika untuk 
// menampilkan element atau komponent berdasarkan kondisi tertentu. Contoh :

function App() {
    
    const showButton = false ;

    return (

        <div>

                {/* Tampilkan button kalo ShowButton = true  */}
                {showButton && <button> Click Me </button>}

                {/* Tampilkan teks ini jika ShowButton = false */}
                {!showButton && <p> No Button </p>}

        </div>
    )
}

// Dari logika diatas nisa juga dipersingkat menggunakan ternary operator. Kurang lebih seperti berikut :
function App() {
    
    const showButton = false;

    return (


            <div>
                    {
                        showButton ? <button>Click Me</button> : <p> No Button </p>
                    }
            </div>
    )
}