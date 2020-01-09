import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import Form from './card';
import db from '../firebase';
import '../App.css';
// import firebase from '../firebase';

const Itemsmenu = () => {
    const Menuitems = Menu();
    const coffeebreak = Menuitems.filter(item=>item.breakfast === true);
    const lunch = Menuitems.filter(item=>item.breakfast !== true);
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    const [form, setForm] = useState([]);
    // const [total, setTotal] = useState([]);
    // const [send, setSend] = useState([])
        
    //adc item
    const addOrder = (item) =>{ 
        const index = order.findIndex(itemNumber => itemNumber.Name === item.Name);
        if (index === -1){
            setOrder([...order, {...item, quantity: 1}]);
        }else{
            order[index].quantity += 1;
            setOrder([...order]);
        }
    }
   
    //deletar pedidos
    const deletOrder = (item) => {
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
    const total = order.reduce((accumulator, item) => accumulator + (item.Price*item.quantity),0);

    //Enviar Pedido para o firebase  
    function sendOrder() {
        // console.log("enviou");
         //order.map(item =>item.Name);
        const orderClient = {
            form, 
            order,
            // status:"pendente",
            // timestamp: db.FieldValue.serverTimestamp(),
        };
        console.log(order)
        // console.log(order[0].Name);
        // console.log(order.map(item =>item.Name))
        db.collection('orders')
        .add(orderClient)
        .then(
            setForm([]),
            setOrder([])        
        )
        
    }   

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
            <Form placeholder="Nome do Cliente e nº da mesa" value={form} onChange={(e)=> setForm(e.target.value)}/>
            {
            
                order.map(item => 
                    <>
                        <span className="pedido">{item.Name} - qtde: {item.quantity}
                        <Button className = "btn-del"title = '🗑' onClick = {() => deletOrder(item)} /> 
                        </span>
                        
                    </>)
            } 
            <h3>Total: {total},00</h3>
            <Button Name ="Enviar" onClick ={sendOrder} />
            
            </div></>
        </>
            )                
}

export default Itemsmenu;