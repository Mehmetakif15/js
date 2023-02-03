const but = document.createElement("button");
but.innerText = "Genarate a password";

const div1 = document.querySelector(".container");
div1.appendChild(but);

const par = document.createElement("p");
par.innerText = "Your Password is: ";
div1.appendChild(par);

const span = document.createElement("span");
par.appendChild(span);

but.addEventListener("click", function () {
  password = generatePassword();
  span.innerText = password;

  function generatePassword() {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let password = "";

    for (let i = 0; i < 3; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    for (let i = 0; i < 2; i++) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    let randomLowerLetter =
      lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    password += randomLowerLetter;

    let randomUpperLetter =
      upperLetters[Math.floor(Math.random() * upperLetters.length)];
    password += randomUpperLetter;

    for (let i = password.length; i < 10; i++) {
      let randomChar =
        Math.random() < 0.5
          ? lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
          : upperLetters[Math.floor(Math.random() * upperLetters.length)];
      password += randomChar;
    }

    password = [...password];
    password = password.sort(() => Math.random() - 0.5).join("");
    console.log(password);
    return password;
  }
});
