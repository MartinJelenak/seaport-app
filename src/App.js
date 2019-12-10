import React from 'react';
import './App.css';
import Menu from './menu.js'
import BodyProgram from './bodyProgram.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <Menu />
        <BodyProgram />
      </>
    );
  }
}


export default App;
