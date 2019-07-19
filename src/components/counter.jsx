import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {
    count: 0, 
    tags: ['España','Francia', 'Portugal']
  };

  render() {
    return (
      // {this.state.count} dinamic changes// m-2 : margen 2 espacios// btn-sm diminutivo de small
      // a la hora de meter stilos podemos hacerlo de diferentes formas, {this.styles} o {{fontSize: 30}}
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
        {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
