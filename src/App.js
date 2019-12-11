import React from 'react';
import './App.css';
import Menu from './menu.js'
import BodyProgram from './bodyProgram.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBodyId: ''
    }
  }
  render() {
    return (
      <>
        <Menu onClick={this.handleButtonChange} />
        <BodyProgram id={this.state.currentBodyId} />
      </>
    );
  }
  handleButtonChange = (event) => {
    this.setState({
      currentBodyId: ukazka(event.target.id)
    })
  }
}

function ukazka(l) {
  console.log(l)
  return l
}

export default App;
