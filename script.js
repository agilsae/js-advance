//Cara utk membuat Object pada javascript
//1. Object Literal
//kelemahan => tidak efektif jika object yang sama ada banyak
// let mahasiswa1 = {
//     nama: 'Agil',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Sae',
//     energy: 20,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }
// }

//2. Function Declaration
//kekurangan =>  meskipun tidak manual membuat object yang sama, tp banyak memakan memori
// function Mahasiswa(nama, energy){
//     let mahasiswa = {};

//     //property
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     //methode
//     mahasiswa.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }

//     mahasiswa.main = function(jam){
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }

//     return mahasiswa;
// }

// let agil = Mahasiswa('Agil',7);
// let sae = Mahasiswa('Sae', 10);

//2. Function Declaration v2
//kekurangan =>  jika menambahkan method baru perlu di tambahkan jg property pada funtion Mahasiswa
//methode
// const methodMahasiswa = {
//     makan: function (porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     },

//     main: function (jam){
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     },

//     tidur: function(jam) {
//         this.energy += jam * 2;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }
// }


// function Mahasiswa(nama, energy){
//     let mahasiswa = {};

//     //property
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let agil = Mahasiswa('Agil',7);
// let sae = Mahasiswa('Sae', 10);


//3. Constructor Function
//keyword New
// function Mahasiswa(nama, energy){
//     //property
//     this.nama = nama;
//     this.energy = energy;

//     //methode
//     this.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }

//     this.main = function(jam){
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }

// }

// let agil = new Mahasiswa('agil', 10);


//4. Object.create
// const methodMahasiswa = {
//     makan: function (porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     },

//     main: function (jam){
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     },

//     tidur: function(jam) {
//         this.energy += jam * 2;
//         console.log(`Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `);
//     }
// }


// function Mahasiswa(nama, energy){
//     let mahasiswa = Object.create(methodMahasiswa);

//     //property
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let agil = Mahasiswa('Agil',7);
// let sae = Mahasiswa('Sae', 10);



//latihan
// const energyKebahagian = {
//     senyum: function (porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, terima kasih udh senyum :) , bahagiaku sekarang bertambah ${this.energy} `);
//     },

//     ngambek: function (porsi){
//         this.energy -= porsi;
//         console.log(`Hallo ${this.nama}, maaf udh bikin ngambek :( , bahagiku sekarang berkurang ${this.energy} `);
//     }
// }

// function Bahagia(nama, energy){
//     let kebahagianAgil = Object.create(energyKebahagian);

//     kebahagianAgil.nama = nama;
//     kebahagianAgil.energy = energy;

//     return kebahagianAgil;
// }

// let aristaParadiba = Bahagia('Mama',10);
// let elzioDsae = Bahagia('Jagoan Ayah', 10);

//-------Prototype-----------
// dibelakang layar let this = Object.create(Mahasiswa.prototype);

//versi prototype
// function Mahasiswa(nama, energy){
//     //property
//     this.nama = nama;
//     this.energy = energy;
// }

//     Mahasiswa.prototype.makan = function (porsi){
//         this.energy += porsi;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     },

//     Mahasiswa.prototype.main = function (jam){
//         this.energy -= jam;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     },

//     Mahasiswa.prototype.tidur = function(jam) {
//         this.energy += jam * 2;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     }

// let agil = new Mahasiswa('Agil', 10);

//versi class
// class Mahasiswa {
//     constructor (nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }

//     makan (porsi){
//         this.energy += porsi;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     },

//     main (jam){
//         this.energy -= jam;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     },

//     tidur (jam) {
//         this.energy += jam * 2;
//         return `Hallo ${this.nama}, selamat makan!, energi anda sekarang ${this.energy} `;
//     }
// }

// let agil = new Mahasiswa('Agil', 10);

//latihan
// function Bahagiaku(nama, energi){ 
//     this.nama = nama;
//     this.energi = energi;
// }

// Bahagiaku.prototype.senyum = function (porsi) {
//     this.energi += porsi;
//         return `Hallo "${this.nama}", terima kasih udh senyum :) , bahagiaku makin nambah jadi ${this.energi} `;
// }

// Bahagiaku.prototype.ngambek = function (porsi) {
//     this.energi -= porsi;
//         return `Hallo "${this.nama}", maaf udh bikin ngambek :( , bahagiaku berkurang jadi ${this.energi} `;
// }

// let aristaParadiba = new Bahagiaku('Mama', 5);
// let elzioDsae = new Bahagiaku('Jagoan Ayah', 5);

//----------------closure--------------
//1
// function init () {
//     let nama = 'Agil';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();
//2
// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
    
// })();

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());

//------------Arrow function-----------
//function expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('agil'));

// //Arrow
// const callName = nama =>  `halo, ${nama}`;
// console.log(callName('agil arrow'));

// const callTime = (nama, waktu) => {
//     return `halo, ${nama} ${waktu}`;
//  }
// console.log(callTime('agil arrow 2','10'));

// const helloWorld = () => 'Hellow World';
// console.log(helloWorld());

// let mahasiswa = ['agil','sae','cahya'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let mahasiswa = ['agil','sae','cahya'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let mahasiswa = ['agil','sae','cahya'];

let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);


