import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bgColor: 'red',
        text: 'I don\'t like blue'
    }
    this.change = this.change.bind(this);
  }
  change(e = null) {
    this.setState((prevState, props) => ({
        bgColor : prevState.bgColor === 'red' ?  'blue' : 'red',
        text: prevState.bgColor === 'red' ? 'I don\'t like red' : 'I don\'t like blue'
    }));
  }
  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.bgColor}}>
        <ChangeColorButton change={this.change} text={this.state.text}></ChangeColorButton>
      </div>
    )
  }
}

export default ColoredBlock;