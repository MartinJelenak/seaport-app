import React from 'react'
import ShopToRootErrors from './shopToRootErrors.js'
// import shopToRoot from './shopToRoot/renderer.js'
const { ipcRenderer } = window.require("electron");

class ShopToRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipc: false
        }
    }
    render() {
        return (
            <form>
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
    fnOnStartClick = (event) => {
        event.preventDefault(); //pre refreshovanie reactu koli <form> treba pouzit funkciu event.preventDefault();
        if (event.target.id === 'errorBtn') {
            ipcRenderer.send("open-file-dialog")
        } else {
            console.log('START')
        }
    }
    componentDidMount() {
        if (window.isElectron) {

            window.ipcRenderer.on('selected-directory', (event, arg) => {
                console.log(arg);
                this.setState({ ipc: true })
            })
            window.ipcRenderer.send('open-file-dialog')
        }
    }

    // shopToRoot() {


    // }
}

export default ShopToRoot;