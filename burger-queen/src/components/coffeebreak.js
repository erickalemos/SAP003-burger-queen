import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import '../App.css';
// import addOrder from './order';

const Coffeebreak = () => {
    const [order, setOrder] = useState([]);

    const addOrder = (item)=>{ 
    setOrder([...order, item])
    console.log('valor', item.Price)
}

    const coffeeitems = Menu();
    return (
        <>
            {coffeeitems.map((item)=> item.breakfast === true ?
            <Button 
                className= "bt bt-coffee"
                Name={item.Name} Price={item.Price}
                onClick ={addOrder}
            />:false )} 
        </>
            )

}

export default Coffeebreak;