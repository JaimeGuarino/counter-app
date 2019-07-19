import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {
    count: 0
  };

  render() {
    return (
      // {this.state.count} dinamic changes// m-2 : margen 2 espacios// btn-sm diminutivo de small
      // a la hora de meter stilos podemos hacerlo de diferentes formas, {this.styles} o {{fontSize: 30}}
      <div>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
