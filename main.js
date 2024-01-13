const { app, BrowserWindow} = require('electron');
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1440,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, "preloader.js")
        }
    });

    win.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
    createWindow();
    app.on("active", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') app.quit()
})