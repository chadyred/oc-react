import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Products from './Products';
import ColoredBlock from './ColoredBlock';


class App extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    alert("Hello wold")
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}, welcome here !
        </p>
        <Clock> </Clock>
        <button onClick={this.handleClick}>
          Click me
        </button>
        <div className="main-content">
          <ColoredBlock></ColoredBlock>
        </div>
        <div className="products">
          <Products></Products>
        </div>
      </div>
    );
  }
}

export default App;