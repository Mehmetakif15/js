console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const list = document.querySelector("li");
console.log(list);

console.log(list.parentElement);
console.log(list.parentNode);
console.log(list.parentNode.parentNode.parentNode.parentNode);

console.log(list.closest("section"));
console.log(list.closest("body").querySelector("#header h1"));

//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");

console.log(addItem.children); //?HTMLCollection

addItem.children[0].style.color = "red"; //?h2
console.log(addItem.parentNode.parentNode.children[0].children[0]); //?h1

const header = document.querySelector("header");
const h1 = header.firstElementChild;
console.log(addItem.lastElementChild.value);
console.log(h1.firstChild);
//*3- Yatay Yonde traverse
//*----------------------------------------------
const ul = document.querySelector("ul");
