//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("header h1");
const langInput = document.getElementById("input");
let newList = null;
const buton = document.getElementById("btn");
const ul = document.createElement("ul");
buton.after(ul);

h1.onmouseover = function () {
  h1.style.color = "red";
};

h1.onmouseout = () => {
  h1.style.color = "black";
};

// document.getElementById("btn").onclick = () => {
//   alert("Btn clicked");
// };

document.getElementById("btn").addEventListener("click", () => {
  console.log(langInput.value);
  //   newList = document.createElement("li");
  //   buton.after(newList);
  !langInput.value
    ? alert("please write")
    : (ul.innerHTML += `<li>${langInput.value}</li>`);
  langInput.value = "";
  langInput.focus();
});

langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   if (event.keyCode === 13) {
  //     buton.click();
  //   }
  if (event.code === "Enter") {
    buton.click();
  }
});

window.addEventListener("load", () => {
  langInput.focus();
});

const print = () => {
  document.write("PRINT");
};

window.onload = print();
