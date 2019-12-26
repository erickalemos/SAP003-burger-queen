
import React, {Component} from "react";
import '../App.css';


function Button (props) {
     
        return( 
        <>
        <section onClick ={props.handleClick}>
          <button 
          onClick={() => props.onClick(props)}
          className={props.className}
          >
        <p>{props.Name}</p>
        <p>{props.Price}</p>
        
         </button>
        </section>
       </>
    )
  }


export default Button;