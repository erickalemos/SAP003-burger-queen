import React, {
    useEffect,
    useState
} from 'react';

function Order(props) {
    const [order, setOrder] = useState([]);
    useEffect(() => {
       document.title = `Você clicou ${count} vezes`;
      });
    return ( 
        
        <>
        <form class="clientInformation">
        <input type ="text" placeholder ="Nome do Cliente"></input> 
        <input type ="text" placeholder ="Número de Mesa"></input>
        <h4>Dados do pedido</h4>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
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
}

export default Order;