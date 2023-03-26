const display = document.getElementById("display")
let leftBracCount = 0;
function addNumber(Number) {
    display.innerHTML +=Number
    document.getElementById("equals").removeAttribute('disabled')
    document.getElementById("plus").removeAttribute('disabled')
    document.getElementById("minus").removeAttribute('disabled')
    document.getElementById("multiply").removeAttribute('disabled')
    document.getElementById("divide").removeAttribute('disabled')
    document.getElementById("zero").removeAttribute('disabled')
    document.getElementById("AC").removeAttribute('disabled')
    document.getElementById("DE").removeAttribute('disabled')
    document.getElementById("leftbrc").setAttribute('disabled', '')
    if (leftBracCount !== 0) {
        document.getElementById("equals").setAttribute('disabled', '')
    }
    if (leftBracCount > 0) {
        document.getElementById("rightbrc").removeAttribute('disabled')
    }
}
function disableStuff(){
    document.getElementById("zero").setAttribute('disabled', '')
    document.getElementById("AC").setAttribute('disabled', '')
    document.getElementById("DE").setAttribute('disabled', '')
    document.getElementById("rightbrc").setAttribute('disabled', '')
    document.getElementById("equals").setAttribute('disabled', '')
    document.getElementById("plus").setAttribute('disabled', '')
    document.getElementById("minus").setAttribute('disabled', '')
    document.getElementById("multiply").setAttribute('disabled', '')
    document.getElementById("divide").setAttribute('disabled', '')
    document.getElementById("point").removeAttribute('disabled')
    document.getElementById("leftbrc").removeAttribute('disabled')
}
function allClear() {
    display.innerHTML = ""
    disableStuff()
}
function DeLete() {
    const curVal = display.innerHTML;
    if (curVal.length > 0) {
        display.innerHTML = curVal.slice(0, -1)
    const newCurVal = display.innerHTML;
    if (newCurVal == '') {
        disableStuff()
        }
    }
    if (curVal[(curVal.length - 1)] == '.') {
        document.getElementById("point").removeAttribute('disabled')
    }
}
function addPoint() {
    display.innerHTML += ".";
    document.getElementById("point").setAttribute('disabled', '')
}
function addFunc(funcName) {
    document.getElementById("equals").setAttribute('disabled', '')
    document.getElementById("plus").setAttribute('disabled', '')
    document.getElementById("minus").setAttribute('disabled', '')
    document.getElementById("multiply").setAttribute('disabled', '')
    document.getElementById("divide").setAttribute('disabled', '')
    document.getElementById("zero").setAttribute('disabled', '')
    document.getElementById("leftbrc").removeAttribute('disabled')
    document.getElementById("rightbrc").setAttribute('disabled', '')
    if (leftBracCount !== 0) {
        document.getElementById("equals").setAttribute('disabled', '')
    }
    if (funcName == 'plus') {
        display.innerHTML += " + "
    }
    if (funcName == 'minus') {
        display.innerHTML += " - "
    }
    if (funcName == 'multiply') {
        display.innerHTML += " * "
    }
    if (funcName == 'divide') {
        display.innerHTML += " / "
    }
    document.getElementById("point").removeAttribute('disabled')
}
function addLeftBrac() {
    leftBracCount += 1;
    document.getElementById("rightbrc").removeAttribute('disabled')
    document.getElementById("AC").removeAttribute('disabled')
    document.getElementById("DE").removeAttribute('disabled')
    if (leftBracCount !== 0) {
        document.getElementById("equals").setAttribute('disabled', '')
    }
    const curValue = display.innerHTML;
    let charAtPos = curValue.charAt[curValue.length - 1]
    display.innerHTML += ' ( '
    
}
function addRightBrac() {
    leftBracCount = leftBracCount - 1
    display.innerHTML += ' ) '
    if (leftBracCount == 0) {
        document.getElementById("rightbrc").setAttribute('disabled', '')
        document.getElementById("equals").removeAttribute('disabled')
    }
}
function equal() {
    "use strict";
    let input = display.innerHTML;
	const result = eval(input);
	display.innerHTML = result;
    document.getElementById("equals").setAttribute('disabled', '')
}