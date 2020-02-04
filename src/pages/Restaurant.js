import React, {useState} from 'react';
import Menu from '../menu';
import Button from '../components/button';
import Input from '../components/input';
import '../App.css';
import firebase from '../firebase';
import Swal from 'sweetalert2';

const Restaurant = () => {
    const Menuitems = Menu();
    const coffeebreak = Menuitems.filter(item=>item.breakfast);
    const lunch = Menuitems.filter(item=>!item.breakfast);
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    const [Name, setName] = useState([]);
    const [table, setTable] = useState([]);
    
    const addOrder = (item) =>{ 
        const index = order.findIndex(itemNumber => itemNumber.Name === item.Name);
        if (index === -1){
            setOrder([...order, {...item, quantity: 1}]);
        }else{
            order[index].quantity += 1;
            setOrder([...order]);
        }
    }

    const deletOrder = (item) => {
        const indexItem = order.findIndex(i=> i.Name === item.Name);
        const filterDel = order.filter(i=> i.Name !== item.Name);          
        if(order[indexItem].quantity === 1){
            order.splice(indexItem, 1);
            setOrder([...filterDel])
        }else{
            order[indexItem].quantity-=1;
            setOrder([...order]);
        }     
    }

    const total = order.reduce((accumulator, item) => accumulator + (item.Price*item.quantity),0);

    function sendOrder() {
    if(order.length && table.length && Name.length) {
        firebase.firestore().collection('orders')
        .add({
            Name,
            table, 
            order,
            status:'Pendente',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()})
        .then( 
            Swal.fire({
                icon: 'success',
                title: 'Pedido enviado com sucesso!',
                showConfirmButton: false,
                timer: 1500
            }),
        setName(''),
        setTable(''),
        setOrder([]) 
         )} else if(order.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Selecione ao menos um item!',
            showConfirmButton: false,
            timer: 1500
        })
    } else if(Name.length === 0){
        Swal.fire({
            icon: 'warning',
            title: 'Digite o nome do cliente',
            showConfirmButton: false,
            timer: 1500
        })
    } else if(table.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Digite o n° da mesa',
            showConfirmButton: false,
            timer: 1500
        })
    } 
    }   
    
    return (
        <>
            <main className='container-restaurant'>
                <div className='box-items'>
                    <div className='bt-menutype'>
                        <h3>Menu</h3>
                        <div className='container-restaurant '>
                            <Button Name='Café da Manhã' className='bt-color' onClick={()=> setMenu([...coffeebreak])} />
                            <Button Name='Resto do Dia' className='bt-color' onClick={()=> setMenu([...lunch])} />
                        </div>
                    </div>
                    <div className = 'button-Itemsmenu'>
                        
                    <div class="drink flex">{menu.map(item => item.type === "drink"? 
                        <Button className='bt bt-Itemsmenu' Name={item.Name} Price={item.Price} onClick ={() => addOrder(item)} />:false 
                    )}</div>
                    <div class="extra flex">{menu.map(item => item.type === "extra"?
                        <Button className='bt bt-Itemsmenu' Name={item.Name}  Price= {item.Price} onClick ={() => addOrder(item)} />:false 
                    )}</div> 
                    <div class="additional flex">{menu.map(item => item.type === "additional"?
                        <Button className='bt bt-Itemsmenu' Name={item.Name} Price={item.Price} onClick ={() => addOrder(item)} />:false 
                    )}</div> 
                    <div class="sandwich flex">{menu.map(item => item.type === "sandwich"?
                        <Button className='bt bt-Itemsmenu' Name={item.Name} Price={item.Price} onClick ={() => addOrder(item)} />:false 
                    )}</div> 

                </div>
                </div>
        
                <>
                    <div className='box-order'>
                        <h3>Dados do Pedido</h3>
                        <Input placeholder='Nome do Cliente' className='input-data name-data' value={Name} onChange={(e)=> setName(e.target.value)}/><br></br>
                        <Input placeholder='Nº da mesa' value={table} className='input-data table-data' onChange={(e)=> setTable(e.target.value)}/>
                        {order.map(item => 
                            <>
                                <div className='order'>{item.Name} - qtde: {item.quantity}
                                    <Button className = 'btn-del'title = '🗑' onClick = {() => deletOrder(item)} /> 
                                </div>    
                            </>
                        )} 
                        <h3>Total: R$ {total},00</h3>
                        <Button Name ='Enviar' className='bt-color' onClick ={sendOrder} />
                    </div>
                </>
            </main>
        </>
    )                
}

export default Restaurant;