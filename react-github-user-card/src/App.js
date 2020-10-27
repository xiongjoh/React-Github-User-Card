import React from 'react'
import axios from 'axios'

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user:[],
    }
  }

  render() {
    return (
      <div className="main container">
        <p>Hello</p>
      </div>
    )
  }
}

export default App;
