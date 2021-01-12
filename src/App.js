import React, { Component } from 'react';
import Display from './component/Display';
import Button from './component/Button';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  }
  onClickHandler(index) {
    this.setState({
      number: this.state.number + index
    })
  }
  render() {
    return (
      <div className="App">
        <Display value={this.state.number} />
        <div>
          <Button clickHandler={()=>this.onClickHandler(-1)}>-</Button>
          <Button clickHandler={()=>this.onClickHandler(1)}>+</Button>
        </div>
      </div>
    );
  }
}  
export default App;