import React, {useState} from 'react';
import Menu from '../components/menu';
import Button from '../components/button';
import Input from '../components/input';
import '../App.css';
import firebase from '../firebase';


const Restaurant = () => {
    const Menuitems = Menu();
    const coffeebreak = Menuitems.filter(item=>item.breakfast === true);
    const lunch = Menuitems.filter(item=>item.breakfast !== true);
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    const [name, setName] = useState([]);
    const [table, setTable] = useState([]);
    
            
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
        //  e.preventDefault();
        if(order.length && table && name) {
            // const orderClient = 
            //     // name,
            //     // table, 
            //     // order,
            //     // status:"Pendente",
            //     // timestamp:firebase.firestore.FieldValue.serverTimestamp()
            // 
            firebase.firestore().collection('orders')
        .add({
            name,
            table, 
            order,
            status:"Pendente",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(()=> {
            alert("Pedido Enviado")
    
            // setName([]),
            // setTable([]),
            // setOrder([])                
        })
    
        setName('')
        setTable('')
        setOrder([]) 
    } else if(!order.length){
            alert(" Selecione um item")

        }
        else if(!name){
            alert(" Coloque o nome do cliente")

        }
        else if(!table){
            alert(" Coloque o número da mesa")

        }
      
    }   
    
    return (
        <>
        <main className="container-restaurant">
            <div className="box-items">
                <div className="bt-menutype">
                <span className="title"><h3>Menu</h3></span>
                    <Button Name="Café da Manhã" className="bt-menu" onClick={()=> setMenu([...coffeebreak])} />
                    <Button Name="Resto do Dia" className="bt-menu" onClick={()=> setMenu([...lunch])} />
                </div>
                <div className = "button-Itemsmenu">
                {menu.map(item => 
                
                    <Button 
                        className="bt bt-Itemsmenu" 
                        Name={item.Name} 
                        Price={item.Price}
                        onClick ={() => addOrder(item)} 
                        //onClick={()=> verifyOptions(Menuitems)}
                    />)
                } 
                </div>
            </div>
    
            <>
            <div className="box-order">
            <h3>Dados do Pedido</h3>
            <Input placeholder="Nome do Cliente" className="input-data name-data" value={name} onChange={(e)=> setName(e.target.value)}/>
            <Input placeholder="Nº da mesa" value={table} className="input-data table-data" onChange={(e)=> setTable(e.target.value)}/>
            {
            
                order.map(item => 
                    <>
                        <div className="order">{item.Name} - qtde: {item.quantity}
                            <Button className = "btn-del"title = '🗑' onClick = {() => deletOrder(item)} /> 
                        </div>
                        
                    </>)
            } 
            <h3>Total: R$ {total},00</h3>
            <Button Name ="Enviar" className="bt-enviar" onClick ={sendOrder} />
            
            </div></>
            </main>
        </>
            )                
}

export default Restaurant;

