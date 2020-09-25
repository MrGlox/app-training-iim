import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={(ev) => this.setState({ value: ev.target.value })}
        />
        <p>{this.state.value}</p>
      </>
    );
  }
}

export default Form;
