const display = document.getElementById('display')

function append(input) {
    display.value += input;
}
function figure() {
    display.value = eval(display.value);
}
function clearEv() {
    display.value = "";
}
function clearonlylast() {
    len = display.value.length;
    display.value = display.value.toString().slice(0, -1)
}
//I DID IT!