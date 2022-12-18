// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log(" **** Conditions ****");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

const num = +prompt("Enter a number");

if (num > 0) {
  console.log(`${num} is pozitif`);
} else if (num < 0) {
  console.log(`${num} is negatiftir`);
} else {
  console.log(`${num} is equal to zero`);
}

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const num1 = Number(prompt("number1:"));
const num2 = Number(prompt("number2:"));
const num3 = Number(prompt("number3:"));

//* 1.Yontem
if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is biggest`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is biggest`);
} else if (num3 >= num1 && num3 >= num2) {
  console.log(`${num3} is biggest`);
}

//* 2.Yontem
let biggest = num1;

if (num2 > biggest) {
  biggest = num2;
}

if (num3 > biggest) {
  biggest = num3;
}

console.log(`${biggest} is biggest`);

//* 3.Yontem
console.log(`The biggest: ${Math.max(num1, num2, num3)}`);

//? ORNEK3: kosullar birlestirilerek bir degiskene aktarilarak kullanilabilir.
const year = 11;
const kidsCount = 3;
const graduate = true;
const langCount = 5;

const increase =
  year >= 10 && kidsCount >= 2 && graduate == true && langCount >= 2;

if (increase === true) {
  console.log("He or She deserves an increased salary");
}

//? Alternatif olarak
if (increase) {
  console.log("He or She deserves an increased salary");
}
//**************** SWITCH-CASE *******************

const s1 = Number(prompt("1. sayiyi giriniz:"));
const islem = prompt("Islem giriniz: +,-,*,/");
const s2 = Number(prompt("2. sayiyi giriniz:"));

let sonuc = 0;

switch (islem) {
  case "+":
    sonuc = s1 + s2;
    break;
  case "-":
    sonuc = s1 - s2;
    break;
  case "*":
    sonuc = s1 * s2;
    break;
  case "/":
    sonuc = s1 / s2;
    break;
  default:
    alert("Yanlis islem girisi");
    break;
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//! ODEV2
//! Clarusway’deki haftalik ders ve etkinlik programinizi,
//! console’dan girilen gun degerine gore cikti veren kodu
//! switch-case yapisi ile yaziniz.

//! Program
//! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

//**************** TERNARY *******************

//? ORNEK5: Kaldi-Gecti

const grade = Number(prompt("Enter your grade:"));
const result = grade >= 50 ? "successful" : "failed";
console.log(`${result} with ${grade}`);

const age = 20;
const gender = "male";
const healty = true;
const education = "teacher";

age >= 18 && gender === "male" && healty === true && education !== "student"
  ? alert("military service is required")
  : alert("military service is not required");

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//* let salary = 5000;
//* salary = salary * 1.5

//! ODEV4: Console’dan kisininin gelir ve gider miktarini alan
//! eger kisinin geliri giderinden en az asgari ucret kadar fazla ise
//! Kredi Verilebilir 🤑 , değilse  Kredi Verilemez 🥺
//! seklinde cikti veren kodu Ternary deyimi kullanarak yaziniz.
