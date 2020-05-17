import React from "react";
import "./styles.css";
export default class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      a: 0,
      b: 0,
      sum: 0,
      sub: 0,
      mul: 0,
      divi: 0,
      pow: 0,
      log: 0
    };
  }
  handleA = e => {
    this.setState({
      a: e.target.value
    });
  };
  handleB = e => {
    this.setState({
      b: e.target.value
    });
  };
  sum = () => {
    this.setState({
      sum: parseInt(this.state.a) + parseInt(this.state.b)
    });
  };
  sub = () => {
    this.setState({
      sub: Math.abs(parseInt(this.state.a) - parseInt(this.state.b))
    });
  };
  mul = () => {
    this.setState({
      mul: this.state.a * this.state.b
    });
  };
  divi = () => {
    this.setState({
      divi: this.state.a / this.state.b
    });
  };
  pow = () => {
    this.setState({
      pow: Math.pow(this.state.a, this.state.b)
    });
  };
  log = () => {
    this.setState({
      log: Math.log10(this.state.a)
    });
  };
  render() {
    return (
      <div class="help">
        <button onClick={this.logout}>Logout</button>
        <h1>Algebraic Operation</h1>
        <input
          type="number"
          placeholder="First Number"
          onChange={this.handleA}
        />
        <br />
        <input
          type="number"
          placeholder="Second Number"
          onChange={this.handleB}
        />
        <br />
        <button onClick={this.sum} class="t">
          Addition
        </button>
        <br />
        <button onClick={this.sub} class="t">
          Subtraction
        </button>
        <br />
        <button onClick={this.mul} class="t">
          Multiplication
        </button>
        <br />
        <button onClick={this.divi} class="t">
          Division
        </button>
        <br />
        <button onClick={this.pow} class="t">
          Power
        </button>
        <br />
        <button onClick={this.log} class="t">
          Log
        </button>
        <br />
        Value of a: {this.state.a}
        <br />
        Value of b: {this.state.b}
        <br />
        Addition: {this.state.sum}
        <br />
        Subtraction: {this.state.sub}
        <br />
        Multiplication: {this.state.mul}
        <br />
        Division: {this.state.divi}
        <br />
        Power: {this.state.pow}
        <br />
        Log: {this.state.log}
      </div>
    );
  }
}
