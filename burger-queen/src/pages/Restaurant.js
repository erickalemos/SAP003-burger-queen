import React, {useEffect, useState} from 'react';
import db from '../firebase'
import MenuCard from '../components/MenuCard';
import Coffeebreak from '../components/coffebreak';
import Lunch from '../components/lunch';
import Order from '../components/order';

function Restaurant() {
//     const [menu, setMenu] = useState([]);
//     useEffect(()=>{
//         db.collection('menu').get()
//         .then(snapshot =>{
//         snapshot.forEach(doc =>{
//             setMenu((currentState)=>[...currentState,doc.data()]);
//             //doc.data();
//        })
//     })
//     },[])

    return (
        <>
        <h3>Café da Manhã</h3>
        <Coffeebreak /> <br/><br/>
        <h3>Resto do Dia</h3>
        <Lunch />
        <h3> Seu Pedido </h3>    
        <Order />
        </>
    // <div>{menu.map(menuitem => <p>{menuitem.Name}</p>)}</div>
    // <div>{menu.map(menuitem => <MenuCard name= {menuitem.Name} price = {menuitem.Price}/>)}</div>
    )
}

export default Restaurant;