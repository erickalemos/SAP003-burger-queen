import React, {Component} from 'react';
import Menu from '../pages/waiter';
//import Button from './button';

const Coffeebreak = () => {
    const coffeeitems = Menu();
    return (
        <>
            {coffeeitems.map((item)=> item.breakfast === true ? <button>{item.Nome}</button>:false )} 
        </>
            )

}

export default Coffeebreak;