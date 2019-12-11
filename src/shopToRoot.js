import React from 'react'
import ShopToRootErrors from 'shopToRootErrors.js'
class ShopToRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
                <div>
                    <h3>Shop render to root</h3>
                </div>
                <div class="inputsDiv">
                    <input type="text" placeholder="Choose event folder" id="choosenFile"></input>
                    <button className="btn btn-outline-secondary" id="errorBtn">...</button>
                </div>
                <div>
                    <button id="startBtn">Start</button>
                </div>
                <div id="barr">
                </div>

                <ShopToRootErrors />
            </form>
        );
    }
}



export default ShopToRoot;