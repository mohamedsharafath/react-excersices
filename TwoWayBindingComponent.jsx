import React, { Component } from 'react';
import './App.css'

class TwoWayBindingComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty string
    this.state = { inputValue: '' , value:0,timer:0};
  }

  // Event handler for the input change
  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  Increment = () => {
      this.setState(prevState => ({
        value:prevState.value+1
      }))
  };

  Exec = () => {
    let timer=setInterval(()=> 
    {
      this.setState(prevState => ({timer:prevState.timer+1}))
    },1000)

    setTimeout(() => 
    {
      clearInterval(timer)
    },5000)
  }

  render() {
    return (
        <>
        <h1>Example of Two-way Data-Binding using class Component</h1>
        <div className=''>
          <textarea rows={10} cols={30}
          // value={this.state.inputValue} // The textarea is controlled by the state
          onChange={this.handleInputChange} // Update the state on input change
          />
          <p>Current Value: {this.state.inputValue}</p> {/* Displaying the current value */}
          <div>{this.state.value}</div>
          <button onClick={this.Increment}>+</button>
          <button onClick={this.Exec}>{this.state.timer}</button>
        </div>
      </>
    );
  }
}

export default TwoWayBindingComponent;
