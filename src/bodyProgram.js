import React from 'react'
import ShopToRoot from './shopToRoot.js'
import NextProgram from './nextProgram.js'

class BodyProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (this.props.id == '' || this.props.id == 'link0') {
            return (
                <div id='bodyDiv'>
                    <ShopToRoot />
                </div>
            )
        }
        else if (this.props.id === 'link1') {
            return (
                <div id='bodyDiv'>
                    <NextProgram />
                </div>
            )
        }

    }
}

export default BodyProgram;