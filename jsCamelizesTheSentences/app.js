let text = "JavaScript-coding-challenge";
// function convertToCamelCase(text) {
//   let newText = text.replace(/-/g, " ");
//   let words = newText.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     if (i === 0) {
//       result = words[i][0].toLowerCase() + "avaScript";

//       console.log(words[i][0]);
//     } else {
//       result +=
//         words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//   }
//   return result;
// }
// console.log(convertToCamelCase(text));

let str = "JavaScript Coding chaLlenge";
const camelCase = (str) => {
  let sonuc;
  if (str.includes(" ")) {
    sonuc = str
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
      .join("");
    console.log(sonuc);
  } else if (str.includes("-")) {
    sonuc = str
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
      .join("");
    console.log(sonuc);
  } else {
    return str;
  }
  return sonuc.charAt(0).toLowerCase() + sonuc.slice(1);
};
console.log(camelCase(text));
console.log(camelCase(str));
