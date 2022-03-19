const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({});
}

app.on("closed", () => (mainWindow = null));
app.on("ready", createWindow());
