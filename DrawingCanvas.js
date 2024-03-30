const canvas = document.getElementById('DrawingCanvas');
export const canvasContext = canvas.getContext("2d");

//Canvas Display, Size and Window Resizing Properties
//--------------------------------
SetCanvasToWindowSize();
window.addEventListener('resize', ResizeCanvas);

function SetCanvasToWindowSize() {
    canvasContext.canvas.imageSmoothingEnabled = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvasContext.canvas.height = 3000;
    canvasContext.canvas.width = 3000;
}

function ResizeCanvas() {

}

//Drawing
//-------
let isDrawing = false;



canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


canvasContext.strokeStyle = 'black'
canvasContext.lineWidth = 5
canvasContext.lineJoin = 'round'
canvasContext.lineCap = 'round'


//------------------------

let pencolorname = '#000000';

export function ClearCanvas() {
    canvasContext.clearRect(0,0,canvas.width,canvas.height)
}

export function ChangeToEraser() {
    canvasContext.strokeStyle = '#ffffff'
}

export function ChangeToPen() {
    canvasContext.strokeStyle = pencolorname
}

export function ChangePenColor(colorname) {
    pencolorname = colorname
    canvasContext.strokeStyle = colorname
}
//------------------------


function startDrawing(event) {
    event.preventDefault()
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

