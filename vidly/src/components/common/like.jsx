import React, { Component } from 'react';


//Input: liked: boolean
//Output: onClick


const Like = (props) => {
    
    let classes = "fa fa-heart";
        if(!props.liked) classes += "-o";
        return (
             <i 
                onClick={props.onClick}
                style = {{cursor: "pointer"}}
                className ={classes}
                aria-hidden="true" 
            />
         );
};
 
export default Like;



/*

class Like extends Component {
    render() { 
        //lo unico que cambia empty o full is de -o, lo tratamos:
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return (
             <i 
                onClick={this.props.onClick}
                style = {{cursor: "pointer"}}
                className ={classes}
                aria-hidden="true"> 
            </i>  );
    }
}
 
*/
