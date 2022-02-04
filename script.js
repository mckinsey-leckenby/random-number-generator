const number = document.querySelector(".number");
const button = document.querySelector(".generate");

const generateNumber = () => {
    //Generate number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
}

button.addEventListener("click", generateNumber)

generateNumber();

