import React from 'react'
import ShopToRootErrors from './shopToRootErrors.js'
// import shopToRoot from './shopToRoot/renderer.js'
// const { ipcRenderer } = window.require("electron");
const ipcRenderer = window.require('electron').ipcRenderer


class ShopToRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <form>
                <input directory="" webkitdirectory="" onclick={this.showFileName} type="file" />
                <div>
                    <h3>Shop render to root</h3>
                </div>
                <div className="inputsDiv">
                    <input type="text" placeholder="Choose event folder" id="choosenFile" />
                    <button className="btn btn-outline-secondary" id="errorBtn" onClick={this.fnOnStartClick}>...</button>
                </div>
                <div>
                    <button id="startBtn" onClick={this.fnOnStartClick}>Start</button>
                </div>
                <div id="barr">
                </div>

                <ShopToRootErrors />
            </form>
        );
    }


    fshowFileName(event) {
        console.log(event.target.value)
    }

    fn2(event, args) {
        alert('data', args.data)
    }

    fnOnStartClick = (event) => {
        if (event.target.id === 'errorBtn') {
            // ipcRenderer.send("open-file-dialog")
        } else {
            console.log('START')
        }
    }
}

export default ShopToRoot;

