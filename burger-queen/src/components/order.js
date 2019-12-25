import React, { useState} from 'react';

function Order(props) {
    // const [order, setOrder] = useState([]);
  
    return ( 
        
        <>
        <form class="clientInformation">
        <input type ="text" placeholder ="Nome do Cliente"></input> 
        <input type ="text" placeholder ="Número de Mesa"></input>
        <h4>Dados do pedido</h4>
                
            {/* {order.map((item)=> item.setOrder <p>{item.Name}</p><p>{item.Price}</p>)}  */}
       
       
        </form>
        </>

        // let orderSelect = [];
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // console.log(orderSelect.reduce(reducer))
    )
    //     const order = `
    //     <form class="form">
    //       <order data-id="${props.dataId}" class="${props.class}" type="${props.type}" " placeholder="${props.placeholder}"/>    
    //     </form>
    //     `;
    //     return order;

// function orderCount(item){
//   console.log('apertouuuuu \o/')

// }
}


export default Order;