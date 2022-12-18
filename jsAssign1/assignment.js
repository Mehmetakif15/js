//? ODEV1: Dort Islem Hesap Makinasi (2 Sayi bir operator, if-elseif)

const s1 = Number(prompt("Enter a number:"));
const islem = prompt("Enter a operator: +, -, *, /");
const s2 = Number(prompt("Enter a number:"));

let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
  console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
} else if (islem == "-") {
  sonuc = s1 - s2;
  console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
} else if (islem == "*") {
  sonuc = s1 * s2;
  console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
} else if (islem == "/") {
  sonuc = s1 / s2;
  console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
} else {
  console.log("Gecerli bir islem giriniz!");
}

//? ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

const gun = prompt("Enter a day:");
let work = "free";
switch (gun) {
  case "pazartesi":
  case "sali":
  case "carsamba":
  case "persembe":
    work = "Inclass";
    break;
  case "cuma":
    work = "Teamwork";
    break;
  case "cumartesi":
    work = "Inclass + Workshop";
    break;
  case "pazar":
    work = "Self-study";
    break;
  default:
    alert("kafana gore takil");
    break;
}
console.log(`${gun} : ${work}`);

//? ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

let salary = Number(prompt("Enter your salary:"));
const newSalary =
  salary > 5500 ? (salary = salary * 1.1) : (salary = salary * 1.5);

console.log(`Your new salary : ${newSalary}`);

//? ODEV4: Kredi risk programi: Console dan kişinin gelir ve gider miktarını alan eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑 değilse Kredi Verilemez 🥺 şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const income = Number(prompt("Enter your income:"));
const outgo = Number(prompt("Enter your outgo:"));

const result =
  income - outgo >= 5500
    ? "Credit can be given. Congrats! 🤑"
    : "Credit can not be given. Unfortunately. ☹";

console.log(`${result}`);
