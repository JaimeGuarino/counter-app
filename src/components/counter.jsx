import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {
    count: 0
  
  };
handleIncrement = () => {

  this.setState({ count: this.state.count +1 })
};
  

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button onClick={this.handleIncrement}
        className= "btn btn-secondary btn-sm"> Increment</button>

      </div>
    );
  }
  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
     return classes;
  }
} 

export default Counter;
