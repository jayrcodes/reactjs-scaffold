import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    message: 'Hello world',
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
