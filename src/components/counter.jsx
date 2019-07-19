import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {
    count: 0
  };

  render() {
    return (
      // {this.state.count} dinamic changes
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
