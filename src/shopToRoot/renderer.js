const { ipcRenderer } = window.require("electron");
var fs = require('fs')
var path = require('path')

// const errorBtn = document.getElementById('errorBtn')
// const startBtn = document.getElementById('startBtn')

// errorBtn.addEventListener('click', (event) => {
//     ipcRenderer.send("open-file-dialog")
// })

// ipcRenderer.on('selected-directory', (event, pathFromEl) => {
//     document.getElementById('choosenFile').value = pathFromEl[0]
// })

// startBtn.addEventListener('click', function () {
//     getData.GetData(document.getElementById('choosenFile').value)
// })


export default function test() {

    ipcRenderer.on('selected-directory', (event, pathFromEl) => {
        document.getElementById('choosenFile').value = pathFromEl[0]
    })
}