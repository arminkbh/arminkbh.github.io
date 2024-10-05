let randomNumber = 0;
let Nmr1 = document.getElementById("var1");
let Nmr2 = document.getElementById("var2");
let sum = document.getElementById("ResultSum");
const Button = document.getElementById("GenerateRandom");
function GenerateNumber() {
    randomNumber = Math.floor(Math.random() * Nmr2.value + Nmr1.value);
    sum.value = randomNumber;
    console.log(randomNumber);
}
Button.addEventListener("click", GenerateNumber);