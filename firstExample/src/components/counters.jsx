import React, { Component } from 'react';  //escribiendo imrc
import Counter from './counter';


class Counters extends Component {  //escribiendo cc
    
    state = { 
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]

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


    render() {  //<h4>Counter # {counter.id}</h4> children componen para pasar el h4 completo
        return ( 
         <div>
            <button
             onClick={this.handleReset}
             className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter =>(
                 <Counter 
                  counter= {counter}
                  key={counter.id}
                  onDelete={this.handleDelete}
                  onIncrement= {this.handleIncrement}
                  value= {counter.value}
                  selected={true}
                  id={counter.id} >
                 </Counter>

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