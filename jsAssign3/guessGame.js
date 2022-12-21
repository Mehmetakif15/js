//* 5 denemede 0-100 arasinda tutulan rastgele sayiyi tahmin etme oyunu yaziniz.

let trial = 5;

const randomNum = Number(prompt("Enter a number between 0-100:"));

do {
  var guess = Number(prompt("Enter a guess:"));
  trial--;
  if (guess == randomNum) {
    console.log("Congrats, you win");
    console.log(guess);
    break;
  } else if (guess < randomNum) {
    console.log("increase your guess ⬆");
    console.log(guess);
  } else {
    console.log("decreasa your guess ⬇");
    console.log(guess);
  }
} while (trial > 0);
if (guess !== randomNum) {
  console.log("Sorry, you lost 😔");
}
