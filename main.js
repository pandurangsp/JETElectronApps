const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

var index = 0;

function createWindow() {
    const win = new BrowserWindow({
        backgroundColor: "white",
        icon:'electronImages/favicon.ico',
        webPreferences: {
            show: false,
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")            
        }
    });
    win.maximize();
    win.show();
    win.loadFile(path.join(__dirname, "web/index.html"));
    app.setAppUserModelId("A nice notification");
}


//getProcesses
ipcMain.handle('raiseNotification', async (evt, msg) => {
    try {
        console.log("MSG RECVD. IS ", msg);
        new Notification({ title: "Message", body: msg,icon:'electronImages/hi.png'}).show();
    }
    catch (e) {
        throw e;
    }
});


app.on('ready', createWindow);