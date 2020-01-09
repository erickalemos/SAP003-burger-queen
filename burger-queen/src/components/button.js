
import React from "react";
import '../App.css';


function Button (props) {
     
        return( 
        <>
        <section onClick ={props.handleClick}>
          <button 
          //class="bt"
          onClick={() => props.onClick(props)}
          className={props.className}
          >
        {props.Name}  
        {props.Price}
        {props.Additional}
        {props.Option}
        {props.title}</p>
        <p>{props.type}</p>
       
        
         </button>
        </section>
       </>
    )
  }


export default Button;