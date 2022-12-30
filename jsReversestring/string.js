//**** REVERSE a string Clarusway Rocks! */

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Clarusway Rocks!"));

//**** REVERSE a string Happy */

function happy(rvr) {
  let newString = "";
  for (let i = rvr.length - 1; i >= 0; i--) {
    newString += rvr[i];
  }
  return newString;
}
console.log(happy("happy"));

//**** REVERSE a sentence Clarusway Rocks! */

function reverseWord(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWord("Clarusway"));

function sentence(ters) {
  let word = ters.split(" ");
  let newSentence = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newSentence += word[i] + " ";
  }
  return newSentence;
}
console.log(sentence("days. big make things Little"));
