//*** Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

//*** Valid email addresses must follow these rules:
//*** It must have the username@websitename.extension format type.
//*** The maximum length of the extension is 3.

function validateEmail(email) {
  // Regular expression to check for the format of the email address
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  // Check if the email address matches the regular expression
  if (regex.test(email)) {
    console.log("valid");
    return true;
  } else {
    console.log("invalid");
    return false;
  }
}
let email = prompt("Please enter your email");
validateEmail(email);
