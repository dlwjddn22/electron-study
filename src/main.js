const { app, BrowserWindow } = require('electron') 
const path = require('path') 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    } 
  }) 
  win.loadURL("http://localhost:3000")//개발시에만 이렇게 하고 배포시에는 파일로 읽어오도록 해야함.
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})