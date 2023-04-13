const LOG_BUTTON = document.getElementById("log-btn");

// greering constants
const NAME = document.getElementById("exampleInputName1");
const SecondNAME = document.getElementById("exampleInputSecondName1");

// mail and password const
const MAIL = document.getElementById("exampleInputEmail1");
const PASSWORD = document.getElementById("exampleInputPassword1");

LOG_BUTTON.addEventListener("click", () => {
  // first part
  console.log(MAIL.value);
  console.log(PASSWORD.value);
  // second part
  alert(NAME.value + " " + SecondNAME.value + " ," + " раді тебе бачити!");
});

// // need maybe
// console.log(MAIL);
// console.log(PASSWORD);
