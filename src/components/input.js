import React from 'react';

function Input(props) {
    return (
        
        <input 
            className={props.className}
            placeholder={props.placeholder}
            text={props.text}
            value={props.value} onChange={props.onChange}>     
        </input>
        
    )
}

export default Input;