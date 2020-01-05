import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import '../App.css';

const Lunch = () => {
    const [order, setOrder] = useState([]);

    const addOrder = (item)=>{ 
        setOrder([...order, item])
        console.log('valor', item.Price)
    }
    const lunchitems = Menu();
    
    
    return (
        <>
        {/* {lunchitems.map((item)=> item.breakfast !== true ? <button class="bt bt-lunch" onClick ={addOrder}>{item.Name}</button>:false )}  */}

            {lunchitems.map((item)=> item.breakfast !== true ?
            <Button className="bt bt-lunch" Name={item.Name} //Price={item.Price} //Additional={item.Additional}
            Option={item.Option}
            onClick ={addOrder} />:false )} 
        </>
            )
}

export default Lunch;