// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

// let str1 = "this is a string";
// let str2 = `this is a string`;
// let str4 = new String("this is a string");

// console.log(typeof str1);
// console.log(typeof str4);

// console.log(str1);
// console.log(str2);
// console.log(str4);

// let str1 = "Clarusway";
// let str2 = "Full Stack";
// let str3 = "";
// let str4 = str1 + " " + str2;

// console.log(str1.concat(" ", str2));
// console.log(str4);

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
// console.log(str4.length);

// let str = "Hello World";
// let str2 = `'Hell"o" "World'`

// console.log(str[str.length - 1]);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[3]);

// //* str nin tum elamanlarini for dongusu ile yaz.
// for (i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// //* str nin tum elamanlarini for dongusu ile tersten yaz.
// for (i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// console.log("Merhh\naba");

// let str1 = "Clarusway";

// console.log(str1.slice(1, 5));
// console.log(str1.substring(1, 5));
// console.log(str1.substring(5, 1));

// console.log(str1.slice(-8, -3));
// console.log(str1.slice(-5, 8));
// console.log(str1.slice(4));

// console.log(str1.substring(str1.length - 4));

// let str2 = str1.slice(0, 5);
// console.log({ str2 });

// let str = "Hello Tom, welcome to world";

// console.log(str.includes("welcome"));

// let email = "tom@gmail.com";

// console.log(email.includes("@"))

// console.log(str.indexOf("om"));
// console.log(str.indexOf("om", str.indexOf("om") + 1));

// console.log(str.lastIndexOf("w"));
// console.log(str.lastIndexOf("w", 21));

// let str = "Mr Blue has a blue home and a blue car.";

// let newStr = str.replace("blue", "red");
// let newStr2 = str.replace(/blue/gi, "red");
// console.log(newStr);
// console.log(newStr2);

// let str = "welcome toü Fulli stack";

// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split(","));
// console.log(str.split("welcome"));

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// let x = prompt("Kullanici adinizi giriniz:").toLowerCase();
// console.log(x);

// let str = "     Welcome to real world         ";
// console.log(str);
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

let x = prompt("Kullanici adinizi giriniz:").toLowerCase().trim().split(" ");

console.log(x);
