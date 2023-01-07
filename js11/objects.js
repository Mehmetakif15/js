//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatoru ile
//* ---------------------------------------------------------

const car = new Object();
car.brand = "Audi";
car.model = "2023";
car.color = "white";

console.log(car);
console.log(car.model);
console.log(car["color"]);

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personal(id, ad, maas) {
  this.tc = id;
  this.name = ad;
  this.salary = maas;
}

const p1 = new Personal("123456789", "Mike", 11000);
console.log(p1);

const p2 = new Personal("258741369", "Jan", 26000);
console.log(p2);

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir

// window.alert("Merhaba")
console.log(window.Personel);

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Til",
  surname: "Rev",
  age: 35,
  languages: ["C++", "Go", "Java", "Phyton"],
  salary: 100000,
};

console.log(worker);

// //? Write
worker.age += 1;
console.log(worker);

worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
console.log(upperCaseLangs);

//? yeni bir property ve value eklenebilir.
worker.nationality = "T.C";
console.log(worker);

const person = worker; //? Shallow Copying vs Deep Copying
person.dob = 2000;
console.log({ worker });
console.log({ person });

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker)); //? Deep Copy
console.log(JSON.stringify(worker));
