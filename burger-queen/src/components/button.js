
import React, {Component} from "react";
import '../App.css';


function Button (props) {
     
        return( 
        <>
        <section onClick ={props.handleClick}>
          <button class="bt"
          onClick={() => props.onClick(props)}
          className={props.className}
          >
        <p>{props.Name}{props.title}</p>
        <p>{props.Price}</p>
        <p>{props.Additional}</p>
        <p>{props.Option}</p>
       
        
         </button>
        </section>
       </>
    )
  }


export default Button;