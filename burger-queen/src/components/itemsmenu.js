import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import Form from './card';
import '../App.css';
import firebase from '../firebase';

const Itemsmenu = () => {
    const Menuitems = Menu();
    const coffeebreak = Menuitems.filter(item=>item.breakfast === true);
    const lunch = Menuitems.filter(item=>item.breakfast !== true);
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    const [form, setForm] = useState([]);
    //const [modal,setModal] = useState({status: false});
         
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
        const orderClient = {
            form, 
            order,
            status:"Pendente",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }
        firebase.firestore().collection('orders')
        .add(orderClient)
        .then(
            setForm([]),
            setOrder([])        
        )  
    }   

    // const verifyOptions = (Menuitems) =>{
    //     if(Menuitems.Option){
    //         setModal({status: true, item: Menuitems})
    //     }else{
    //         addOrder(Menuitems)
    //     }
    // }
console.log(Menuitems.map(i=>i.Option))
    return (
        <>
        <main class="container-restaurant">
            <div class="box-items">
                <div className="bt-menutype">
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
            </div></div>
            {/* {modal === true?(
                <div>
                    <h3>Extras</h3>
                    {modal.item.Option.map(elem=>(
                    <div> 
                        <input type="radio" name="Opções value=={elem}"/>
                        <label>{elem}</label>
                    </div>))}
                    <h3>Opções</h3>
                </div>
            ):false} */}
            <>
            <div class="box-order">
            <h3>Dados do Pedido</h3>
            <Form placeholder="Nome do Cliente e nº da mesa" value={form} onChange={(e)=> setForm(e.target.value)}/>
            {
            
                order.map(item => 
                    <>
                        <div className="order">{item.Name} - qtde: {item.quantity}
                            <Button className = "btn-del"title = '🗑' onClick = {() => deletOrder(item)} /> 
                        </div>
                        
                    </>)
            } 
            <h3>Total:R$ {total},00</h3>
            <Button Name ="Enviar" onClick ={sendOrder} />
            
            </div></>
            </main>
        </>
            )                
}

export default Itemsmenu;

// ... CRIAR UM COPIA DO OBJETO/ARRAY
// .MAP(menuitem)=>  {...menuitem}copiar o item.price e o item.name
// trocar botoes do menu por section e passar algumas divs para section
// IF CONDIÇÃO SE TIVER O MENU OPTIONS
// const [modal, setModal]= useState({false});
//
// const verifyOptions= {menutitem}=>{
//     if(menuitem.options){
//      setModal({status:true, item:menuItem}) 
//     }else{
//    addOrder(Menuitem)
//}
// }
// criar no return {modal===true} ou {modal? }
//nomear header, main e sections
//colocar firebase em um pasta
//fazer logo no canva