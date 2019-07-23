import React, { Component } from "react";

// Stateless Functional Component // 

const NavBar =(props) => {
    return( 
        <nav class="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secomdary">
              {props.totalCounters}
            </span>
          </a>
        </nav>
      );
}; 

// Lo de arriba y lo de abajo es el mismo resultado con diferente implementacion


 
export default ;

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secomdary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}



export default NavBar;
