import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = { 
    counters: [
        {id:1, value: 4},
        {id:2, value: 0},
        {id:3, value: 0},
        {id:4, value: 0}
    ]

 }

 constructor(){
   super();
   console.log('App-Constructor');
   //Es a la primera funcion que se llama

 }

 componentDidMount(){
  console.log('App-Mount');
  //es a la tercera funcion que se llama
}

render(){
  console.log('App-Render');
  //es a la segunda funcion que se llama
}



 handleIncrement= counter => {

    const counters = [... this.state.counters]; //hacemos una copia completa del array
    const index = counters.indexOf(counter); //se coge el indice del contador para asi saber cual cambiar 
    counters[index] = {...counter}; //se hace un array solo con el contador que se ha modificado
    counters[index].value++; //se le incrementa una unidad por ser el pulsado
    this.setState({counters});

 }

 handleReset = () => {

    const counters = this.state.counters.map(c => {

        c.value = 0;
        return c;
    });
    this.setState({counters: counters});
 };

 handleDelete = (counterId) =>{
     //console.log('Event Handle Called',counterId);
     const counters = this.state.counters.filter(c => c.id !== counterId);
     //filer crea un nuevo array con todos los elementos que cumplan con la condicion implementada
     this.setState({counters: counters})
 }

  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className="container">
            <Counters 
            counters = {this.state.counters}
            onReset={this.handleReset}
            onIncrement= {this.handleIncrement}
            onDelete={this.handleDelete}
            />

          </main>
      </React.Fragment>
    
    
    );
  }
}
 
export default App;
