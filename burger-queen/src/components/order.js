import React, { useState} from 'react';
// import Count from './count';

function Order(props) {
    const [order, setOrder] = useState([]);

    // const addOrder = (item)=>{
    //     setOrder([...order, item])
    //     console.log('item', item.Price)
    // }
     
     return ( 
        
        <>
        <form class="clientInformation">
        <input type ="text" placeholder ="Nome do Cliente"></input> 
        <input type ="text" placeholder ="Número de Mesa"></input>
        <h4>Dados do pedido</h4>
        {/* <Count /> */}
        {
            order.map((item)=>  
            <p>{item.Name && item.Price}
            </p>
            )
        } 
       
       
        </form>
        </>


  
     )
     function orderCount(){
        console.log('apertouuuuu \o/')

        // let orderSelect = [];
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // console.log(orderSelect.reduce(reducer))
  
     }

};


export default Order;