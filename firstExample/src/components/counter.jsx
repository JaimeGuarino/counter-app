import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  constructor(props) {
    super(props);
    // si ponemos cc, Create class
    this.state = {
      //es de la clase component y en ella se declaran las variables que haran falta
      count: this.props.counter.value,
      tags: ["tag1", "tag2", "tag3"]
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  renderTags() {
    if (this.state.tags.lenght === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 }); //incrementa el contador
  }

  render() {
    console.log(this.props);
    console.log("props", this.props); //propos es un atributo que tienen la clase componente por defecto
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
