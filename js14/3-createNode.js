console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p");
const text = document.createTextNode("Bu bir p elementidir.");
newPar.appendChild(text);
console.log(newPar);

const h2 = document.querySelector(".item-list h2");
h2.after(newPar);
// h2.before(newPar);

//? INPUT value
const myInput = document.getElementById("input");
console.log(myInput.value);

//? id, class
newPar.id = "par";
newPar.className = "center red";

//? setAttribute
newPar.setAttribute("id", "para"); //?alternative

//? classList
newPar.classList.add("bg-tomato", "left");
newPar.classList.remove("left");

if (!newPar.classList.contains("blue")) {
  newPar.classList.add("blue");
} else {
  newPar.classList.add("orange");
}

//? toggle
newPar.classList.toggle("white"); //? white class'i yoksa ekler veya varsa kaldirir.

//? getAttribute()
console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("id"));
console.log(myInput.getAttribute("name"));
console.log(myInput.getAttribute("type"));

//? alternative
console.log(myInput.id);
console.log(newPar.className);

//? INNER HTML (CIDDI GUVENLIK ACIKLARI VAR)
const newDiv = document.querySelector("#new-div");
newDiv.innerHTML += `<li id="go" class="red">Go</li>`;
