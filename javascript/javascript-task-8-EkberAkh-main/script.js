const dayInput = document.querySelector(".dayInput");
const monthInput = document.querySelector(".monthInput");
const yearInput = document.querySelector(".yearInput");

const button = document.querySelector(".button");
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const outputDay = document
  .querySelector(".day-bottom")
  .querySelector(".day-value");
const outputMonth = document
  .querySelector(".month-bottom")
  .querySelector(".month-value");
const outputYear = document
  .querySelector(".year-bottom")
  .querySelector(".year-value");

  function validForm() {
    const inputs = document.querySelectorAll("input");
  
    let valid = true;
  
    inputs.forEach((i) => {
      const parent = i.parentElement;
      if (!i.value) {
        i.style.borderColor = "red";
        parent.querySelector("span").innerText = "This field is required";
        valid = false;
      } else if (monthInput.value > 12 ) {
        monthInput.style.borderColor = "red";
        parent.querySelector("span").innerText = "Enter a valid value";
        valid = false;
      } else if (dayInput.value > 31 ) {
        dayInput.style.borderColor = "red";
        parent.querySelector("span").innerText = "Enter a valid value"
        valid = false;
      } else if (yearInput.value > year || yearInput.value < 100) {
        yearInput.style.borderColor = "red";
        parent.querySelector("span").innerText = "Enter a valid value";
        valid = false;
      } else {
        i.style.borderColor = "#dbdbdb";
        parent.querySelector("span").innerText = "";
        validator = true;
      }
    });
    return valid;
  }

  function submitForm() {
   
  
    if (validForm()) {
      if (dayInput.value > day) {
        day = day + months[month - 1];
        month = month - 1;
      }
      if (monthInput.value > month) {
        month = month + 12;
        year = year - 1;
      }
  
      const finalDay = day - dayInput.value;
      const finalMonth = month - monthInput.value;
      const finalYear = year - yearInput.value;
  
      outputDay.innerHTML = finalDay;
      outputMonth.innerHTML = finalMonth;
      outputYear.innerHTML = finalYear;
    }
  }
  
  button.addEventListener("click", submitForm);
