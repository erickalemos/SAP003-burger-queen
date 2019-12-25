import React, {Component} from 'react';
import Menu from './menu';
//import Button from './button';
import '../App.css';
import orderCount from './order';

const Lunch = () => {
    const lunchitems = Menu();
    return (
        <>
            {lunchitems.map((item)=> item.breakfast !== true ? <button class="bt bt-lunch" onClick ={orderCount}>{item.Name}</button>:false )} 
        </>
            )
}

export default Lunch;