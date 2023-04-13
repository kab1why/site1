const LOG_BUTTON = document.getElementById("log-btn");

// greering constants
const NAME = document.getElementById("exampleInputName1");
const SecondNAME = document.getElementById("exampleInputSecondName1");

// mail and password const
const MAIL = document.getElementById("exampleInputEmail1");
const PASSWORD = document.getElementById("exampleInputPassword1");
let mail_check = "@gmail.com";

LOG_BUTTON.addEventListener("click", () => {
  // first part
  if (NAME.value.length < 4 || NAME.value === undefined) {
    alert("Будь ласка введіть довше ім'я");
  } else if (SecondNAME.value.length < 4 || SecondNAME.value === undefined) {
    alert("Будь ласка введіть довше прізвище");
  } else if (
    PASSWORD.value.length < 7 ||
    PASSWORD.value === undefined ||
    PASSWORD.value.length == 7
  ) {
    alert(
      "Будь ласка введіть правильний пароль довжина якого має бути 8, або більше"
    );
  }

  // second part
  else {
    alert(NAME.value + " " + SecondNAME.value + " ," + " раді тебе бачити!");
    console.log("Email: " + MAIL.value + "; " + "Password:" + PASSWORD.value);
  }
});

// console.log("Email: " + MAIL.value + "; " + "Password:" + PASSWORD.value);
