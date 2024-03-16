import {app, BrowserWindow, ipcMain} from "electron";

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        resizable: false,
        fullscreen: true,
        closable: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
        }
    })
    win.loadURL('http://localhost:5173')
    //win.loadFile('dist/index.html')
}

export function QuitApp() {
    app.quit()
}

app.whenReady().then( () => {
    createWindow()
})

ipcMain.on('Exit', () => app.quit())