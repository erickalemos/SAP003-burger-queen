
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
        <p>{props.Name}</p>  
        <p>{props.Price}</p>
        <p>{props.Additional}</p>
        <p>{props.Option}</p>
        <p>{props.title}</p>
        <p>{props.type}</p>
       
        
         </button>
        </section>
       </>
    )
  }


export default Button;