import React, { Component } from 'react';

class ToggleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? 'Hide Component' : 'Show Component'}
        </button>
        {this.state.showComponent ?<p>Hi! How are You!!!</p> :""}
      </div>
    );
  }
}

export default ToggleMessage;
