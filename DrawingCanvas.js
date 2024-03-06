
const canvas = document.getElementById('DrawingCanvas');
const canvasContext = canvas.getContext("2d");

const colorPickerButton = document.getElementById('ColorPickerButton');
const penButton = document.getElementById('PenButton');
const eraserButton = document.getElementById('EraserButton');

penButton.addEventListener('click', ChangeToPen)
eraserButton.addEventListener('click', ChangeToEraser)

SetCanvasToWindowSize();
//window.addEventListener('resize', SetCanvasToWindowSize);

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

let isDrawing = false;

canvasContext.strokeStyle = 'rgb(0,90,255)'
canvasContext.lineWidth = 8
canvasContext.lineJoin = 'round'
canvasContext.lineCap = 'round'

canvasContext.imageSmoothingEnabled = true

function ChangeToEraser() {
    canvasContext.strokeStyle = '#ffffff'
}

function ChangeToPen() {
    canvasContext.strokeStyle = '#000000'
}


function startDrawing(event) {
    isDrawing = true;
    canvasContext.beginPath();
    canvasContext.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function draw(event) {
    if (!isDrawing) return;

    canvasContext.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    canvasContext.stroke();
}

function stopDrawing() {
    isDrawing = false;
    canvasContext.closePath();
}

function SetCanvasToWindowSize() {
    canvas.height = 500;
    canvas.width = window.innerWidth;
}

function ChangeColor() {

}