import React from 'react'
import ShopToRoot from './shopToRoot.js'

class BodyProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='bodyDiv'>
                <ShopToRoot />
            </div>
        );
    }
}

export default BodyProgram;