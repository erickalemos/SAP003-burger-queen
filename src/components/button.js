
import React from "react";
import '../App.css';

function Button (props) {
  return( 
  <>
    <section>
      <button 
        onClick={() => props.onClick(props)}
        className={props.className}>
          <p>{props.Name}</p>
          <p>{props.title}</p>
          <p>{props.type}</p>
      </button>
    </section>
  </>
  )
}

export default Button;