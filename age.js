const birthdayInput = document.querySelector("#b-day");
const button = document.querySelector("button");
const ageText = document.querySelector(".age-text");

function calculateAge(birthday) {
  let current = new Date;
  let birthdate = new Date(birthdayInput.value);
  let age = current.getFullYear() - birthdate.getFullYear();

  let currentMonth = current.getMonth();
  let birthdayMonth = birthdate.getMonth();
  let currentDay = current.getDay();
  let birthDay = current.getDay();
  if (currentMonth < birthdayMonth || (currentMonth === birthdayMonth && currentDay < birthDay)) {
    age--; 
  }
  return age;
}

button.addEventListener("click", () => {
 ageText.textContent = `Your age is ${calculateAge(birthdayInput.value)} years old`;
})