import React from 'react';
import Coffeebreak from '../components/coffeebreak';
import Lunch from '../components/lunch';
import Order from '../components/order';
import '../App.css';


function Restaurant() {

    return (
        <div class="tabcontent">
        <h3>Café da Manhã</h3>
        <Coffeebreak /> <br/><br/>
        <h3>Resto do Dia</h3>
        <Lunch />
        <h3> Seu Pedido </h3>    
        <Order />
        </div>
    // <div>{menu.map(menuitem => <p>{menuitem.Name}</p>)}</div>
    // <div>{menu.map(menuitem => <MenuCard name= {menuitem.Name} price = {menuitem.Price}/>)}</div>
    )
}

export default Restaurant;