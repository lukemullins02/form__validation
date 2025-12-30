const form = document.querySelector(".user-form");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const postal = document.getElementById("postal");
const postalError = document.querySelector("#postal + span.error");

const pwd = document.getElementById("pwd");
const pwdError = document.querySelector("#pwd + span.error");

const con_pwd = document.getElementById("con_pwd");
const con_pwdError = document.querySelector("#con_pwd + span.error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

postal.addEventListener("input", () => {
  if (postal.validity.valid) {
    postalError.innerHTML = "";
    postalError.className = "error";
  } else {
    showError();
  }
});

pwd.addEventListener("input", () => {
  if (pwd.validity.valid) {
    pwdError.innerHTML = "";
    pwdError.className = "error";
  } else {
    showError();
  }
});

con_pwd.addEventListener("input", () => {
  if (con_pwd.validity.valid) {
    con_pwdError.innerHTML = "";
    con_pwdError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }

  if (!postal.validity.valid) {
    showError();
    event.preventDefault();
  }

  if (!pwd.validity.valid) {
    showError();
    event.preventDefault();
  }

  if (!con_pwd.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (postal.validity.valueMissing) {
    postalError.textContent = "You need to enter a postal code";
  } else if (postal.validity.patternMismatch) {
    postalError.textContent = "Enter valid postal code";
  } else if (postal.validity.tooLong) {
    postalError.textContent = "Postal Code too long";
  } else if (pwd.validity.valueMissing) {
    pwdError.textContent = "Please enter password";
  } else if (con_pwd.validity.valueMissing) {
    con_pwdError.textContent = "Please enter password";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
