const display = document.getElementById('display')

function append(input) {
    display.value += input;
}
function figure() {
    if (display.value != "89(**999/(") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else {
        display.value = "Apa Kebabrulle";
    }
}
function clearEv() {
    display.value = "";
}
function clearonlylast() {
    len = display.value.length;
    display.value = display.value.toString().slice(0, -1)
}
//I DID IT!
