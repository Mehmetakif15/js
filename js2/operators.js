// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

console.log(" **** Operators ****");

const cola = 20;
const gumm = 5;
const biscuits = 15;

const totalPrice = cola + gumm + biscuits;

// totalPrice++ //? Hata

console.log("TOTAL PRICE:", totalPrice);

//? + operatoru String Concatination islemi de yapar.
console.log("TOTAL PRICE:" + totalPrice);

const comments = totalPrice + "TL";
console.log(comments);

const commets = 50 + 40 + "TL";
console.log(commets);

const firstName = "Ahmet";
const lastName = "Can";
console.log(firstName + " " + lastName);

const s1 = 5,
  s2 = "4",
  s3 = "three";

console.log(s1 + s2); //? 54
console.log(s1 - s2); //? 1
console.log(s1 - s3); //? NaN (Not a Number)
//! String ifadeyi number a cevirmeye calisti fakat mumkun olmadigi icin Nan dondundu

const difference = s1 - s3;
console.log(difference, typeof NaN);

//* Bir islemin sonucunun NaN olup olmadigini anlamak icin isNaN() fonksiyonu kullanilabilir
console.log(isNaN(difference)); //? true

const yearOfBirth = 1990;
const name = "john";
console.log(name + " is " + (2022 - yearOfBirth) + " years old");
console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
);
//* Sistem tarih ve saat bilgileri icin Date() kullanilabilir.
// const date = new Date()
// console.log(date)

//! ======= Template Literals =======

//? 3 sekilde de string tanimlanabilir.

const message1 = "Merhaba Javascript";
const message2 = "Merhaba Javascript";
const message3 = `Merhaba Javascript`; //? Template literals

console.log(`${name} is ${2022 - yearOfBirth} years old`);

//* -CARPMA VE US ALMA (Multiple, Pow)-

//? Example
const pi = 3.14;
const r = +prompt("Please enter r:");
console.log(r);
const square = pi * r * r;
console.log(`Square of Circle: ${Math.floor(square)}`);
console.log(`Square of Circle: ${square.toFixed(3)}`);

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

const randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber * 100);

//* ARTTIRMA VE AZALTMA (Inc, Dec)

let a = 5;
a++;
console.log(a++);
y = a + 5;
console.log(y);

let z = 4;
z = z + 5;
z += 10; //? z = z + 10

let k = 20;
k -= 10;
console.log("k:", --k);
console.log({ k });

let b = 4;
b = b * 3;
b *= 3;
console.log({ b });

const number = +prompt("Please enter a 3-digits number:");

const ones = number % 10;
const tens = Math.floor(number / 10) % 10;
const hundreds = Math.trunc(number / 100);
console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones}`);

const num1 = 3;

console.log(num1 == 3);
console.log(num1 === 3);
console.log(num1 === "3"); //? false

const num2 = "3";

console.log(num1 == num2);
console.log(num1 != num2); //? false
console.log(num1 !== num2); //? true

const num3 = 5;
const num4 = "1";

console.log(num1 > num3);
console.log(num2 > num4, typeof num2, typeof num4); //? true "ASCII'YE GORE KIYASLAMA YAPAR"
