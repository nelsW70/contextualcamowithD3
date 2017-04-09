const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 1920,
      width: 1080,
      fullscreen: true,
      frame: false
  });
  

  mainWindow.loadURL('file://' + __dirname + '/love.html');
});
