// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

//********** */ ex1: silindir hacmi ************//

const r = +prompt("r:");
const h = +prompt("h:");

const volume = (r, h) => Math.PI * r * r * h;

console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`);

//? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.

console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`);

//? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
//? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
//? kisimlarinin basamak sayini gosterir.

console.log(`${r}, ${h} = Volume: ${volume(r, h).toExponential(4)}`);

//******* ex2: yas hesapla *******//

const calculateAge = (year) => new Date().getFullYear() - year;

console.log("Age:", calculateAge(1990));

//* ex3: Girilen n. terime kadar Fibonacci sayilarinin toplamini hesaplayarak yazdiren fonksiyonu dongu ile kodlayiniz.
//? Fibonacci terimleri: 1,1,2,3,5,8,13,21,...

let n1 = 1;
let n2 = 1;
let toplam = 0;
const num = Number(prompt("fibo sayi:"));
for (let i = 3; i <= num; i++) {
  toplam = n1 + n2;
  n1 = n2;
  n2 = toplam;
}
console.log(n2);

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  for (let i = 3; i <= n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return fib2; //? 1 ve 2 degeri verildiginde fib2 //
};

const n = Number(prompt("please enter n:"));
console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
