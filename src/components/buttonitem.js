import React from "react";
import '../App.css';

function ButtonItem (props) {
    return( 
        <>
            <section>
            <button 
                onClick={() => props.onClick(props)}
                className={props.className}>
                <p>{props.Name}</p>
                <p>R${props.Price},00</p>
                <p>{props.title}</p>
                <p>{props.type}</p>
            </button>
            </section>
        </>
    )
}

export default ButtonItem;