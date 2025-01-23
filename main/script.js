const button = document.getElementById("moving-annoying-button");
function changePos() {
    button.style.setProperty("top", Math.floor(Math.random() * window.innerWidth) + "px");
    button.style.setProperty("left", Math.floor(Math.random() * window.innerHeight) + "px");
}
function setTextProperty() {
    let randChoide = Math.floor(Math.random() * 10);
    switch (randChoide) {
        case 1:
            button.textContent = "You're so bad...";
            break;
        case 2:
            button.textContent = "Wow, you impress me of how bad you are...";
            break;
        case 3:
            button.textContent = "How are you even this bad...";
            break;
        case 4:
            button.textContent = "Oh hell nah...";
            break;
        case 5:
            button.textContent = "HOW ARE YOU THIS BAD!";
            break;
        case 6:
            button.textContent = "Just click me already";
            break;
        case 7:
            button.textContent = "Is it that hard to click me?";
            break;
        case 8:
            alert("Just click the button already 🙄");
            break;
        case 9:
            alert("JUST CLICK IT!");
            break;
        case 10:
            button.textContent = "Even Bruno is faster than you... ";
            break;
    }
}
function setTextWait() {
    let randomWait = Math.random() * 10;
    setTimeout(setTextProperty, randomWait);
}
button.addEventListener("mouseover", changePos);

window.changePos = changePos;