import React from 'react';
import Coffeebreak from '../components/coffeebreak';
import Lunch from '../components/lunch';
import Order from '../components/order';
import Menu from '../components/menu';
import '../App.css';


function Restaurant() {
    const coffeeitems = Menu();
    return (
        <div class="tabcontent">
        
        <h3>Café da Manhã</h3>
        <Coffeebreak /> <br/><br/>
        <h3>Resto do Dia</h3>
        {/* {coffeeitems.map((item)=> item.breakfast === true ?<Coffeebreak />:false)}   */}
        <Lunch />
        {/* {coffeeitems.map((item)=> item.breakfast === true ?<Lunch />:false)}   */}
         <Order /> 
        </div>
    
    )
}

export default Restaurant;