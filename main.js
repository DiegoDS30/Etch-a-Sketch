const INITIAL_SIZE = 16;
const INITIAL_COLOR = '#333333';
const INITIAL_MODE = 'color';

let currentSize = INITIAL_SIZE;
let currentColor = INITIAL_COLOR;
let currentMode = INITIAL_MODE;

let sizeValue = document.getElementById ('sizeValue');
let sizeChange = document.getElementById ('sizeChange');
let board = document.getElementById ('board');
let btnColor = document.getElementById ('btnColor');
let btnRainbow = document.getElementById ('btnRainbow');
let btnClear = document.getElementById ('btnClear');
let clrPicker = document.getElementById ('clrPicker');

clrPicker.value = INITIAL_COLOR;
sizeChange.value = INITIAL_SIZE;
sizeValue.innerHTML = `${sizeChange.value} x ${sizeChange.value}`;

sizeChange.addEventListener ('input', () => {

    sizeValue.innerHTML = `${sizeChange.value} x ${sizeChange.value}`

});

sizeChange.addEventListener ('change', () => {

    changeSize (sizeChange.value);

});

clrPicker.addEventListener ('input', function (e) { changeColor(e.target.value) });

btnClear.addEventListener ('click', reDoBoard);

btnColor.addEventListener ('click', function () { changeMode ('color') });

btnRainbow.addEventListener ('click', function () { changeMode ('rainbow') });

function changeSize (size) {

    currentSize = size
    clearBoard ();
    genDivs (size);

}

function reDoBoard (){

    clearBoard ();
    genDivs (currentSize);
    
}

function clearBoard () {

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function genDivs (n) {

    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n * n; i++) {

        let block = document.createElement ('div');
        block.className = 'block';
        block.addEventListener ('mouseenter', paintBoard);

        board.appendChild (block);

    }
}

function changeColor (color) {
    currentColor = color;
}

function paintBoard (e) {

    if (currentMode === 'rainbow') {
        let randomR = Math.floor (Math.random() * 256);
        let randomG = Math.floor (Math.random() * 256);
        let randomB = Math.floor (Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomB}, ${randomG})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }
}

function changeMode (mode) {
    currentMode = mode;
}

changeSize (INITIAL_SIZE)