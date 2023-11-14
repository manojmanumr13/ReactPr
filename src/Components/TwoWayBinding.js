import React, { Component } from 'react';

class TwoWayDataBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <p>Text: {this.state.text}</p>
      </div>
    );
  }
}

export default TwoWayDataBinding;
