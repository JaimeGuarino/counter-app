import React, { Component } from "react"; //escribiendo imrc
import Counter from "./counter";

class Counters extends Component {
  //escribiendo cc
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    //<h4>Counter # {counter.id}</h4> children componen para pasar el h4 completo
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

/* simil para la funcion .map
function crearContador(counter) {
    return <Counter key={counter.id} value= {counter.value} selected={true} />)
}

*/
