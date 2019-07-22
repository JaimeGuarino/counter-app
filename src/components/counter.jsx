import React, { Component } from "react"; // si ponemos imrc: Import React Components, acronimo, sale directamente esta línea

class Counter extends Component {
  // si ponemos cc, Create class
  state = {  //es de la clase component y en ella se declaran las variables que haran falta
    count: 0 ,
    tags: ['tag1', 'tag2', 'tag3']
  };

  renderTags(){
    if(this.state.tags.lenght === 0) return <p> There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

  }


  render() {
    return (
      <div>
        {this.state.tags.length === 0 && 'Please create a new tag!'} 
        {this.renderTags()}
      </div>
    );
  }

  
}

export default Counter;
