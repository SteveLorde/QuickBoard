import {canvasContext,ChangeToEraser, ChangeToPen,ClearCanvas, ChangePenColor} from "./DrawingCanvas.js"



const clearwhiteboardbutton = document.getElementById("ClearWhiteBoardButton")
const colorSwatch = document.getElementById('ColorSwatch')
const colorPickerButton = document.getElementById('ColorPickerButton');
const penButton = document.getElementById('PenButton');
const eraserButton = document.getElementById('EraserButton');
const quitButton = document.getElementById('QuitButton')

const blackColorButton = document.getElementById('BlackColor')
const redColorButton = document.getElementById('RedColor')
const blueColorButton = document.getElementById('BlueColor')
const greenColorButton = document.getElementById('GreenColor')

clearwhiteboardbutton.addEventListener('click', ClearCanvas)
penButton.addEventListener('click', ChangeToPen)
eraserButton.addEventListener('click', ChangeToEraser)
//quitButton.addEventListener('click', () => alert("QUIT TEST"))

colorPickerButton.addEventListener('click', function() {
    if (colorSwatch.style.display === 'none') {
        colorSwatch.style.display = 'block'
    }
    else {
        colorSwatch.style.display = 'none'
    }
})


blackColorButton.addEventListener('click', () => ChangePenColor('black') )
redColorButton.addEventListener('click', () => ChangePenColor('red') )
blueColorButton.addEventListener('click', () => ChangePenColor('blue') )
greenColorButton.addEventListener('click', () => ChangePenColor('green') )


