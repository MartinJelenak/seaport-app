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
                    <img src="./seaportIco.png" alt='lol' />
                </div>
                <ul>
                    <li><a id='link0' onClick={this.props.onClick} href="buton">link 0</a></li>
                    <li><a id='link1' onClick={this.props.onClick} href="link 1">link 1</a></li>
                </ul>
            </div >
        );
    }
}

export default Menu;