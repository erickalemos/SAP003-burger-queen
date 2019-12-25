import React, {Component} from 'react';
import Menu from './menu';
//import Button from './button';
import '../App.css';
import orderCount from './order';

const Coffeebreak = () => {
    const coffeeitems = Menu();
    return (
        <>
            {coffeeitems.map((item)=> item.breakfast === true ? <button class= "bt bt-coffee"onClick ={orderCount}>{item.Name}</button>:false )} 
            {/* {coffeeitems.map((item)=> item.breakfast === true ? <label>{item.Price}</label>:false )}  */}
        </>
            )

}

export default Coffeebreak;