import React from 'react';

function Input(props) {
    return (
        <>
            {/* const form =  */}
                {/* <form className="form" value={props.value} onChange={props.onChange}
                > */}
                    
                <input 
                    className={props.className}
                    placeholder={props.placeholder}
                    text={props.text}
                    value={props.value} onChange={props.onChange}
                > 
                
                </input>
                {/* </form> */}
        </>
    )
    
  }

export default Input;