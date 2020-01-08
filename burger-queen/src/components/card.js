import React from 'react';

function Form(props) {
    return (
        <>
            {/* const form =  */}
                <form class="form">
                <h3>Dados do Pedido</h3>
                <input class="input"
                classname={props.className}
                placeholder={props.placeholder}
                text={props.text}>     
                </input>
                </form>
        </>
    )
    
  }

export default Form;