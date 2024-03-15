import {canvasContext,ChangeToEraser, ChangeToPen,ClearCanvas} from "./DrawingCanvas.js"

const clearwhiteboardbutton = document.getElementById("ClearWhiteBoardButton")
const colorPickerButton = document.getElementById('ColorPickerButton');
const penButton = document.getElementById('PenButton');
const eraserButton = document.getElementById('EraserButton');

clearwhiteboardbutton.addEventListener('click', ClearCanvas)
penButton.addEventListener('click', ChangeToPen)
eraserButton.addEventListener('click', ChangeToEraser)

