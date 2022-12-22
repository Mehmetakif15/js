// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC EXPRESSION **");

//* ORNEK1:
//*****************************************/

//! Expression
const printHello = function () {
  console.log("Hello");
};

printHello(); //! invoke, call

//* ORNEK2:
//*****************************************/

const oddOrEven = function (num) {
  return num % 2 === 0 ? "even" : "odd";
};
console.log(oddOrEven(5));
console.log(oddOrEven(10));

//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//*****************************************/

const findBiggest = function (n1, n2, n3) {
  let biggest = n1;
  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log(`The biggest:${findBiggest(6, 10, 15)}`);

//* ORNEK4: Bir fonksiyon icerisinde baska fonksiyon cagirabilme
//*****************************************/

const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;

    default:
      break;
  }
  return result;
};

console.log(compute(4, 3, "/"));
console.log(compute(6, 3, "*"));
console.log(compute(4, 8, "+"));
