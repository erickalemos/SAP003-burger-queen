import React from 'react';

function Form(props) {
    return (
        <>
            {/* const form =  */}
                <form className="form" value={props.value} onChange={props.onChange}
                >
                <h3>Dados do Pedido</h3>
                <input 
                className={props.className}
                placeholder={props.placeholder}
                text={props.text}>     
                </input>
                </form>
        </>
    )
    
  }

export default Form;