// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

//! Declaration
function printHello() {
  console.log("Hello");
}

printHello(); //! invoke, call
printHello(); //! invoke, call

//* ORNEK2:
//*****************************************/

function greet(firstName, lastName) {
  console.log(`Hi, ${firstName} ${lastName}`);
}

//? invoke examples
greet("akif", "2036");
greet("sedat", "gumus");
greet("maria", "clee");

// const x = prompt("Your name:");
// const y = prompt("Your surname");
// greet(x, y);
//? js de fonksiyonlar parametrelere degiskenleri degil onlarin degerlerini aktarir.

greet("ahmet");

//* ORNEK3:
//*****************************************/

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
// }

// calculate("elif", 2000);

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  return `${name} is ${age} years old`;
}

const elif = calculate("elif", 2000);
console.log(elif);
console.log(calculate("rose", 1990));

//* ORNEK4:
//*****************************************/

//? console dan girilen bir sayinin tek veya cift oldugunu hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar ile yaziniz.

function oddOrEven(num) {
  return num % 2 ? "odd" : "even"; //! number % 2  sonucu 0 ve 0 false oldugu icin true kisma odd false kisma even yazildi
}

const number = +prompt("Please enter a number to check odd or even:");
const oddEven = oddOrEven(number);
console.log(`${number} is ${oddEven}`);
