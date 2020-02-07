
import React from "react";
import '../App.css';

function Buttondel (props) {
    return( 
        <button 
            onClick={() => props.onClick(props)}
            className={props.className}>
            <span>{props.title}</span>
        </button>
    )
}

export default Buttondel;