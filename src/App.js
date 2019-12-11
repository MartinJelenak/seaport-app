import React from 'react';
import './App.css';
import Menu from './menu.js'
import BodyProgram from './bodyProgram.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBodyId: 0
    }
  }
  render() {
    return (
      <>
        <Menu onClick={this.handleButtonChange} />
        <BodyProgram />
      </>
    );
  }
  handleButtonChange = (event, id) => {
    this.setState({
      currentBodyId: this.fn(event.target.id)
    })
  }
  fn(msg) {
    console.log(msg)
    return msg
  }
}


export default App;
