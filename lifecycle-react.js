// library ini sangat disukai karena kemampuan melakukan update tampilan dan data secara otomatis jika terdapat perubahan
// Kemampuan tersebut di dalam React disebut dengan lifecycle / siklus hidup

// >> React Lifecycle -- Class Component
// Di React ada 3 siklus hidup yaitu :

// 1. dimana kita dilahirkan (mounting)
// 2. kemudian berkembang (updating)
// 3. dan kematian (unmounting)

// >> Mounting
// Fase ini mengacu pada pembuatan komponen. Di sinilah komponen ditambahkan ke DOM. Berikut adalah 
// lifecycle yang tersedia pada fase ini :

// 1.constructor()
//Sebelum memulai fase mounting kita mungkin perlu menginisialisasi komponen menggunakan method 
// constructor().Ini digunakan ketika kita perlu menginisialisasi sebuah state dan set method ke dalam komponen
// Ini adalah satu-satunya tempat di mana this.state ditetapkan secara eksplisit

// 2.Static getDerivedStateFromProps()
//Setelah inisialisasi, fungsi berikutnya yang dipanggil adalah static GetDerivedFromProps().Method ini 
// dipanggil sebelum komponen di render (dan sebelum dipasang )
//Method ini memungkinkan komponen untuk memperbarui state berdasarkan perubahan pada props.Ini jarang digunakan
// dan harus digunakan dengan hati-hati karena dapat menyebabkan kesalahan.Aturan umum sebagai pemula
// mungkin kita tidak membutuhkannya dan menghindari menggunakannya 

// 3.render()
//Method render() adalah satu-satunya method yang harus dimiliki komponen. Itu akan selalu dipanggil dan
// tugasnya adalah memasang komponen ke DOM

// 4.ComponenDidMount()
//Fungsi terakhir dalam fase ini adalah ComponentDidMount(). Method ini akan segera dipanggil setelah fungsi render
// dijalankan. Jika kita perlu berinteraksi kepada browser secara langsung , disinilah kita melakukannya 
//Disni kita bisa melakukan HTTP request ke Rest API dan memperbarui state  pada component berdasarkan
// response yang didapatkan oleh Rest API 

// >> Updating
// Fase kedua ini mewakili waktu dimana komponen perlu diperbarui karena terjadi perubahan pada props atau state
// Perubahan ini dapat terjadi di dalam komponen atau melalui backend. Perubahan ini akan memanggil fungsi render() lagi
// Lifecycle pada fase ini :

// 1.static GetDeripvedStateFromProps()
//Ini adalah method pertama yang dipanggil dalam fase ini. Method ini adalah method yang sama digunakan 
// dalam fase Mounting 

// 2.shouldComponentUpdate()
//Method yang selanjutnya akan dipanggil adalah method shouldComponentUpdate().Seperti namanya, method ini 
// memberi kita kendali atas apakah suatu komponen harus diperbarui atau tidak karena perubahan pada properti atau statenya
// Secara default, komponen akan selalu di render ulang saat diperbarui. Method ini dapat mengembalikan 
// nilai true atau false 

// 3.render()
//Jika shoulComponentUpdate() mengembalikan nilai true, maka fungsi render akan dipanggil

// 4.getSnapshotBeforeUpdate()
//Dalam method ini kita diberikan akses pada props dan nilai state sebelum pembaruan ke DOM. Meskipun
// fungsi render sudah dipanggil kita masih bisa melihat nilai sebelmnya

// 5.componentDidUpdate()
//Method ini adalah yang terakhir dipanggil dalam fase ini. Seperti method sebelumnya, method ini juga menerima 
// props sebelumnya dan nilai state sebagai argumen tetapi juga menerima nilai kemmbalian
// getSnapshotBeforeUpdate() sebagai argumen ketiga jika ada

// >> Unmounting
// Fase Unmount adalah dimana komponen dihapus dari DOM. ini menandai akhir dari siklus hidup komponen
// Dalam fase ini kita memiliki satu method yang tersedia yaitu :

// 1.componentWillUnmount()
//Method ini dijalankan tepat sebelum komponen dilepas di DOM, disini kita bisa membersihkan semua yang perlu 
// dihapus sebelum komponen dihilangkan 

