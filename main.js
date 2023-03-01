const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const ipc=electron.ipcMain;
const dialog=electron.dialog;

let win;

function createWindow () {

  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  });
}
// Received Message from the Renderer Process
// ipc.on("open-error-dialog",function(e){


  ipc.on("sync-message",function(e){
  
  // dialog.showErrorBox("An Error Message","Demo of the Error")
  //Here is the step how to reply to the sender
// e.sender.send("opened-error-message","Here is the Message send by Main Process")

// Sync Message received 

e.returnValue="This is A sync Message send from Main"

})

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});