const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize()

const createWindow = () => {
  const win = new BrowserWindow({
    height: 1920,
    width: 1080,
    fullscreen: true,
    webPreferences: {
      enableRemoteModule: true
    }
  });

  win.loadURL('http://localhost:3000');
  win.setMenuBarVisibility(false);
}

app.on('ready', createWindow);