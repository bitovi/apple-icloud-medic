import React from 'react';

class PlainReact extends React.Component {
  constructor () {
    super();
    this.state = { ticks: 0 };
  }
  onTick() {
    this.setState({ ticks: ++this.state.ticks });
  }
  render () {
    return (
      <div>
        <h3>Plain React Component: {this.state.ticks} ticks</h3>
        <button onClick={this.onTick.bind(this)}>Tick</button>
      </div>
    );
  }
}

export default PlainReact;
