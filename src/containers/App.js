import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0, error: false };
  }
  
  clickIncHandler = () => {
    let current = this.state.counter;
    current++;
    this.setState({ counter: current, error: false});
  }

  clickDecHandler = () => {
    let current = this.state.counter;
    if (current > 0) {
        current--;
    } else {
      this.setState({ error: true });
    }
    this.setState({ counter: current });
  }

  render() {
    let errorClass = this.state.error ? 'visible' : 'invisible';

    return (
      <div className="App">
        <h1 id="display-counter">You have clicked: {this.state.counter} times.</h1>
        <div className={`error-msg ${errorClass}`} >The counter cannot go below 0</div>
        <input
          id="counter-button"
          type="button"
          value="Click to increment"
          onClick={this.clickIncHandler}
        />
        <input
          id="decrement-button"
          type="button"
          value="Click to decrement"
          onClick={this.clickDecHandler}
        />
        
      </div>
    );
  }
}

export default App;
