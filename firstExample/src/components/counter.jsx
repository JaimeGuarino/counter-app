import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  /*renderTags() {
    if (this.state.tags.lenght === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
*/
  render() {
    console.log(this.props);
    console.log("props", this.props); //propos es un atributo que tienen la clase componente por defecto
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "Badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
