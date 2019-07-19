import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    );
  }

  render() {
    return (
      // {this.state.count} dinamic changes// m-2 : margen 2 espacios// btn-sm diminutivo de small
      // a la hora de meter stilos podemos hacerlo de diferentes formas, {this.styles} o {{fontSize: 30}}
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
} 

export default Counter;
