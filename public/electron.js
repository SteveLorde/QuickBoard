import {app, BrowserWindow} from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false
        }
    })

    win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
    createWindow()
})