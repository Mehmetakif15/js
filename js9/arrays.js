// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1. yontem (Array Literal) - Tercih edilen yontem

const names = ["emin", "hakan", "tolga", "mete"];

console.log(names);

// ? 4 (names dizisinin length property' sine erisiyoruz)
// * non-primitive verilerde ozellikler olabilir ve bunlara erisim . notasyonu ile olabilir.

console.log(names.length);

const x = 5.2343; // ? primitive
console.log(x.toFixed(2)); // ? object wrapper sayesinde
// ? Primitive'lerde normal sartlarda property olmaz.
//? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda primitive verileri bir obje sarmalayicisi ile sarmalar.

console.log(typeof names); // ? JS de array aslinda object dedigimiz base object'ten turetilmistir.

const emptArr = [];
console.log(emptArr);

// ! 2. Yontem (Object Constructor)
const codingLangs = new Array("C", "Java", "Phyton", "JS");
console.log(codingLangs);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const numbers1 = new Array(10);
console.log(numbers1); //* on elamanlik bos array olusturur.

// ! 3. Yontem (Array.of())
const number2 = Array.of(1, 2, 3);
console.log(number2);

const numbers3 = Array.of(5);
console.log(numbers3); //? [5]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

// !const names = ["emin", "hakan", "tolga", "mete"];

console.log(names[1]);
const tolga = names[2];
console.log(tolga);

// ? Dizinin en son elemanini okumak istersek
console.log(names[3]); // ? hard- coded

const lastEl = names[names.length - 1];
console.log(lastEl);

// ? Alternatif olarak at() metod
console.log(names.at(-1));

//!  Diziye veri yazma

names[2] = "tolga";
// names[2] = names[2].toUpperCase(); // ? assigning yapildiginda etki eder.

console.log(names);

//! Identifier 'names' has already been declared
// const names = ["ismet", "canan"]

// names = ["ismet", "canan"] //! Assignment to constant variable.

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tututlan adresinin degistirilmesini engeller.

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

const cars = ["BMW", "Audi", "Fiat", "Anadol"];
console.log(cars.pop());
console.log(cars);

console.log(cars.push("Lexus"));
console.log(cars);

console.log(cars.unshift("kia"));
console.log(cars);

console.log(cars.shift());
console.log(cars);

cars.splice(1, 0, "Honda");
console.log(cars);

cars.splice(3, 1, "Ferrari");
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort();
console.log(cars);

const numbers5 = [1, 26, 111, 23, 5, 11, 7, 6];
numbers5.sort();
console.log(numbers5);

numbers5.sort((a, b) => a - b);
console.log(numbers5);

numbers5.sort((a, b) => b - a);
console.log(numbers5);

//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================
