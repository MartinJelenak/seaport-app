const electron = require('electron')
const app = electron.app
const path = require('path')
const isDev = require('electron-is-dev')
const { ipcMain, dialog } = require('electron')

const BrowserWindow = electron.BrowserWindow;
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            preload: __dirname + '/preload.js'
        },
    })

    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`,
    )
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.webContents.on('selected-directory', (xx) => {
        console.log(xx);
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})



