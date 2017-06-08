import React from 'react';

class ChangeColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(event) {
    this.props.change();
  }
  render() {
    return (
      <button onClick={this.changeColor}>{this.props.text}</button>
    );
  }
}

export default ChangeColorButton;