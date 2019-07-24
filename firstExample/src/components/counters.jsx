import React, { Component } from 'react';  //escribiendo imrc
import Counter from './counter';


class Counters extends Component {  //escribiendo cc


    render() {  //<h4>Counter # {counter.id}</h4> children componen para pasar el h4 completo
        return ( 
         <div>
            <button
             onClick={this.props.onReset}
             className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter =>(
                 <Counter 
                  counter= {counter}
                  key={counter.id}
                  onDelete={this.props.onDelete}
                  onIncrement= {this.props.onIncrement}
                  onDecrement= {this.props.onDecrement}
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