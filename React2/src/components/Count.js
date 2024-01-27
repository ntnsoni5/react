import React, { Component } from 'react';
import Counter from './Counter';
import Button from './Button';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Button label="Increment" onClick={this.increment} />
        <Button label="Decrement" onClick={this.decrement} />
      </div>
    );
  }
}

export default Count;