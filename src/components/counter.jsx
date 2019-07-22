import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {  //es de la clase component y en ella se declaran las variables que haran falta
    count: 0 
  };



  render() {

    let classes = this.getBadgeClasses();


    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;  //separacion de elementos del struct
    return count === 0 ? "Zero" : count; //0-->pones zero; != ponemos Contador
  }
}

export default Counter;
