function validateEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(email) && email.split(".")[1].length <= 3) {
    return "Valid Email";
  } else {
    return "Invalid Email";
  }
}
let mail = prompt("Please enter your email");
console.log(validateEmail(mail));
