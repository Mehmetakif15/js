let randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = 0;
let lowerGuess = 1;
let upperGuess = 100;
counter = 0;

document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    document.getElementById("guess-button").click();
  }
});

document.getElementById("guess-button").addEventListener("click", function () {
  guess = document.getElementById("guess-input").value;

  if (guess > randomNumber) {
    counter++;
    upperGuess = guess;
    document.getElementById(
      "result"
    ).innerHTML = `Enter a lower number. It's between ${lowerGuess} and ${upperGuess}, number of attempts ${counter}. `;
    document.getElementById("guess-input").value = "";
  } else if (guess < randomNumber) {
    counter++;
    lowerGuess = guess;
    document.getElementById(
      "result"
    ).innerHTML = `Enter a upper number. It's between ${lowerGuess} and ${upperGuess}, number of attempts ${counter}. `;
    document.getElementById("guess-input").value = "";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Congratulations ${guess} is true number.`;
    document.getElementById("guess-input").value = "";
    location.reload();
  }
});
