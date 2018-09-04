import React, { Component } from "react";

class Tile extends Component {
  state = {
    count: this.props.value
  };

  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log("This is an increment", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {this.props.children}
        <button onClick={() => this.props.onMatch(this.props.id)}>
          {this.state.count}
        </button>
        <style>{"button {background-color: pink;}"}</style>
        <h4>{this.state.props}</h4>
      </div>
    );
  }
}

export default Tile;
