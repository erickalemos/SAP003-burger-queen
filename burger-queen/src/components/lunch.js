import React, {Component} from 'react';
import Menu from '../pages/waiter';
//import Button from './button';

const Lunch = () => {
    const lunchitems = Menu();
    return (
        <>
            {lunchitems.map((item)=> item.breakfast !== true ? <button>{item.Nome}</button>:false )} 
        </>
            )

}

export default Lunch;