//* 5 denemede 0-100 arasinda tutulan rastgele sayiyi tahmin etme oyunu yaziniz.

let trial = 5;

const randomNum = Math.round(Math.random() * 100);

do {
  var guess = Number(prompt(`"Enter your guess:"`));
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
  console.log(`"Random Number: ${randomNum} Sorry, you lost 😔"`);
}
