// * ========================
// *         NESTED LOOPS
// * ========================
console.log("** Nested For **");

let result;
let line = "";

//? 10 * 10 = 100 kere doner.
for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    result = row * col;
    line += result + "\t"; // ? bir tab bosluk ekle
  }
  line += "\n"; // ? enter ekle alt satira gec
}
console.log(line);
