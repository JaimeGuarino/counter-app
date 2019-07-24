import React, { Component } from 'react';

//Stateless Fuctional Component
const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary"></span>
        
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
             </a>
        </nav>

      );
};

//se puede hacer con una clase --> extension de componente-->> lo hace asi para saber que tambien 
//se puede hacer ->> la unica diferencia es que hay que pasarle props como atributo

 
export default NavBar;