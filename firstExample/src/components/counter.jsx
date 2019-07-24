import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {


componentDidUpdate(prevProps, prevState){

  if(prevProps.counter.value !== this.props.counter.value){
    //Ajax call and get new data from the server
    //esta funcion te guarda lo que había anteriormente en el DOM,
    //se utiliza para hacer llamadas al servidor y demás

  }
}

componentWillUnmount(){
  //si le damos a eliminar un contador, lo que pasa es que cambia el DOM. Antes de hacerlo llama a la fucion 
  //unmount. para timers, kisteners...

}


  render() {
    console.log(this.props);
    console.log("props",this.props) //propos es un atributo que tienen la clase componente por defecto
    return (
      <div className ="row">
        <div className="col-1">
          <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col"></div>
            <button 
              onClick = {() => this.props.onIncrement(this.props.counter)}
              className= "btn btn-secondary btn-sm m-2 "
              >+
            </button>
            <button 
              onClick = {() => this.props.onDecrement(this.props.counter)}
              className= "btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? 'disabled' : "" }  
              >-
            </button>
            <button 
              onClick ={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"> Delete
            </button>
      </div>
    );
  }

  getBadgeClasses(){
    
    let classes = "Badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;

  }

  formatCount(){
    const{ value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;