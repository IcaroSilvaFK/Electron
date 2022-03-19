const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    hasShadow: true,
    thickFrame: false,
    darkTheme: true,
  });

  mainWindow.loadURL("http://localhost:3000/");
});
app.on("closed", () => (mainWindow = null));

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("active", () => {
  if (mainWindow === null) {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL("http://localhost:3000/");
  }
});
