import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import Form from './card';
import db from '../firebase';
import '../App.css';

const Itemsmenu = () => {
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    // const [send, setSend] = useState([])
    
    
    //adc item
    const addOrder = (item)=>{ 
        // setOrder([...order, item])
        const index = order.findIndex(itemNumber => itemNumber.Name === item.Name);
        console.log(index)
        if (index === -1){
            setOrder([...order, {...item, quantity: 1}])
            console.log(item.quantity)
        }else{
            order[index].quantity += 1;
            setOrder([...order])
            console.log(item.quantity)
        }
    }
   
    //deletar pedidos
    const deletOrder = (item) => {
        console.log(item)
        console.log(item.quantity)
        const indexItem = order.findIndex(i=> i.Name === item.Name);
        const filterDel = order.filter(i=> i.Name !== item.Name);
                     
        if(order[indexItem].quantity === 1){
            order.splice(indexItem, 1)
            setOrder([...filterDel])
        }else{
            order[indexItem].quantity-=1;
            setOrder([...order]);
        }
            
    }
    //reduce
    const total = order.reduce((accumulator, item) => accumulator + (item.Price * item.quantity),0);

    //Enviar Pedido para o firebase

    function sendOrder(props) {
//   const [order, setOrder] = useState([]);
 
      db.collection('orders').add({
        // Name: name,
        Order:order,  
        Total:total

    })
  }   


    const Menuitems = Menu();
    
    const coffeebreak = Menuitems.filter(item=>item.breakfast === true);
    const lunch = Menuitems.filter(item=>item.breakfast !== true);

    return (
        <>
            <Button Name="Café da Manhã" className="bt-menu" onClick={()=> setMenu([...coffeebreak])} />
            <Button Name="Resto do Dia" className="bt-menu" onClick={()=> setMenu([...lunch])} />
            <div className = "button-Itemsmenu">
                {menu.map(item => 
                    <Button className="bt bt-Itemsmenu" Name={item.Name} Price={item.Price}
                    Option={item.Option}
                    // Option={item.Option(i=>i.Option)}
                    // Additional={item.Additional(i=>i.item)}
                    onClick ={addOrder} />)
                } 
            </div>
            <>
            <div>
            <Form placeholder="Nome do Cliente" />
            {
                
                order.map(item => 
                    <p>
                        {item.Name}{item.quantity};
                        <Button className = "btn-del"title = '🗑' onClick = {() => deletOrder(item)} /> 
                    </p>)
            } 
            <h3>Total: {total}</h3>
            <Button Name ="Enviar" onClick ={() => sendOrder(item)} />
            </div></>
        </>
            )                
}

export default Itemsmenu;