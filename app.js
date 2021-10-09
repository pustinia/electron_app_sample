"use strict"

const { app, BrowserWindow} = require("electron");

let win;

function createWindow(){
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on("closed", () => { win = null});
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    console.log(process.platform);
    // darwin  => in mac
    if(process.platform !== "darwin"){
        app.quit();
    }
    app.quit();
});

app.on("activate", () => {
    if(win === null){
        createWindow();
    }
});