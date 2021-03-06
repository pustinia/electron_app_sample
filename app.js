"use strict"

const { app, BrowserWindow } = require("electron");

let win;
const createWindow = () => {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on(`closed`, () => { win = null});
}
const appQuit = () => {
    app.quit();
}
const activate = () => {
    if(win === null){
        createWindow();
    }
}

app.on(`ready`, createWindow);
app.on(`window-all-closed`, appQuit);
app.on(`activate`, activate);