function convertToRoman(num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let key in roman) {
    console.log(key);
    while (num >= roman[key]) {
      console.log(roman[key]);
      result += key;
      num -= roman[key];
    }
  }
  return result;
}
console.log(convertToRoman(8)); // VIII
console.log(convertToRoman(148)); // CXLVIII
console.log(convertToRoman(457)); // CDLVII
