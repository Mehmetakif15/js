console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
const myLi = document.querySelector("li");
console.log(myLi);
myLi.style.color = "purple";

const addItem = document.querySelector(".add-item");
console.log(addItem);
addItem.style.border = "3px solid grey";

const addBtn = document.querySelector("#btn");
console.log(addBtn);
addBtn.style.cursor = "pointer";

const itemH2 = document.querySelector(".item-list h2");
console.log(itemH2);

const addBtnType = document.querySelector("input[type='button']");
console.log(addBtnType.value);

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const lists = document.querySelectorAll("ul li"); //? tagname
console.log(lists); //? NodeList

lists.forEach((li) => console.log(li.textContent));

console.log(
  document.querySelectorAll("section.item-list ul li:nth-child(4)")[0].innerText
);
console.log(
  document.querySelector("section.item-list ul li:nth-child(4)").innerText
);
document.querySelector("section.item-list ul li:nth-child(4)").innerHTML =
  "<p>Paragraf</p>";
