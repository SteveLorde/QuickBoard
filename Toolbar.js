import {
    canvasContext,
    ChangeToEraser,
    ChangeToPen,
    ClearCanvas,
    ChangePenColor,
    IncreaseStroke,
    DecreaseStroke
} from "./DrawingCanvas.js"


const clearwhiteboardbutton = document.getElementById("ClearWhiteBoardButton")
const colorSwatch = document.getElementById('ColorSwatch')
const colorPickerButton = document.getElementById('ColorPickerButton');
const penButton = document.getElementById('PenButton');
const eraserButton = document.getElementById('EraserButton');
const quitButton = document.getElementById('QuitButton')
const decreaseStrokeButton = document.getElementById('DecraseStrokeSizeButton')
const increaseStrokeButton = document.getElementById('IncraseStrokeSizeButton')

const selectedColorViewer = document.getElementById('selectedColorViewer')
const blackColorButton = document.getElementById('BlackColor')
const redColorButton = document.getElementById('RedColor')
const blueColorButton = document.getElementById('BlueColor')
const greenColorButton = document.getElementById('GreenColor')

const saveToClipboardBtn = document.getElementById("SaveToClipboard")

clearwhiteboardbutton.addEventListener('click', ClearCanvas)
penButton.addEventListener('click', ChangeToPen)
eraserButton.addEventListener('click', ChangeToEraser)
//quitButton.addEventListener('click', () => alert("QUIT TEST"))

colorPickerButton.addEventListener('blur', function () {
    setTimeout(() => colorSwatch.style.display = 'none', 100)
})

colorPickerButton.addEventListener('click', function () {
    colorSwatch.style.display = 'block'
})


blackColorButton.addEventListener('click', () => {
    ChangePenColor('black')
    selectedColorViewer.style.backgroundColor = "black"
})
redColorButton.addEventListener('click', () => {
    ChangePenColor('red')
    selectedColorViewer.style.backgroundColor = "red"
})
blueColorButton.addEventListener('click', () => {
    ChangePenColor('blue')
    selectedColorViewer.style.backgroundColor = "blue"
})
greenColorButton.addEventListener('click', () => {
    ChangePenColor('green')
    selectedColorViewer.style.backgroundColor = "green"
})


decreaseStrokeButton.addEventListener('click', () => DecreaseStroke())
increaseStrokeButton.addEventListener('click', () => IncreaseStroke())

saveToClipboardBtn.addEventListener('click', async () => {
    try {
        const blob = await new Promise(resolve => canvasContext.canvas.toBlob(resolve, 'image/png'))

        const clipboardItem = new ClipboardItem({'image/png': blob})

        await navigator.clipboard.write([clipboardItem])

        alert('Canvas image copied to clipboard!')
    } catch (err) {
        console.log('Failed to copy image to clipboard:', err)
    }
})