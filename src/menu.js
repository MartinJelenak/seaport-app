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
                    <li><a id='link0' onClick={this.state.onClick, this.props.id} href="buton">link 0</a></li>
                    <li><a href="link 1">link 1</a></li>
                    <li><a href="link 2">link 2</a></li>
                    <li><a href="link 3">link 3</a></li>
                    <li><a href="link 4">link 4</a></li>
                    <li><a href="link 5">link 5</a></li>
                    <li><a href="link 6">link 6</a></li>
                </ul>
            </div >
        );
    }
}

export default Menu;