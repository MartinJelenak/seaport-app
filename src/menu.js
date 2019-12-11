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
                    <button id='link0' className='menuBtn' onClick={this.props.onClick} href="buton">Shop to root</button><br />
                    <button id='link1' className='menuBtn' onClick={this.props.onClick} href="link 1">Next Script</button><br />
                </ul>
            </div >
        );
    }
}

export default Menu;