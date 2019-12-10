import React from 'react'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='menuDiv'>
                <div>
                    <img src="./seaportIco.png" />
                </div>
                <ul>
                    <li><a onClick={this.state.onClick} href="">Shop to root</a></li>
                    <li><a href="">click</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;