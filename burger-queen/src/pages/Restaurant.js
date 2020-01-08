import React from 'react';
// import Coffeebreak from '../components/coffeebreak';
// import Lunch from '../components/lunch';
import Order from '../components/order';
// import Menu from '../components/menu';
import Itemsmenu from '../components/itemsmenu'
import '../App.css';


function Restaurant() {
    // const coffeeitems = Menu();
    return (
        <div className="tabcontent">
        
        {/* <h3>Café da Manhã</h3>
        <Coffeebreak /> <br/><br/>
        <h3>Resto do Dia</h3>
        <Lunch /> */}
        <Itemsmenu />
         {/* <Order />  */}
        </div>
    
    )
}

export default Restaurant;