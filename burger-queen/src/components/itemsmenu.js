import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import '../App.css';

const Itemsmenu = () => {
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);
    
    const addOrder = (item)=>{ 
        const index = order.findIndex(itemNumber => itemNumber.Name === item.Name)
        console.log(item.quantify)
        if( index === -1){
            setOrder([...order, {...item, quantify: 1}])
        }else{
            order[index].quantify += 1;
            setOrder([...order])
            console.log(item.quantify)
        }
    }
    const total = order.reduce((accumulator, item) => accumulator + item.Price,0) ;

      //deletar pedidos
        const deletOrder = (item) => {
            console.log(item.quantify)
            const indexItem = order.findIndex(i=> i.Name === item.Name);
            const filterDel = order.filter(i=> i.Name !== item.Name);
                     
            if(order[indexItem].quantify === 1){
                setOrder([...filterDel])
            }else{
                order[indexItem].quantify-=1;
                setOrder([...order]);
            }
            
        }

    const Menuitems = Menu();
    
    const coffeebreak = Menuitems.filter(item=>item.breakfast === true)
    const lunch = Menuitems.filter(item=>item.breakfast !== true)

    return (
        <>
        <Button Name="Café da Manhã" onClick={()=> setMenu([...coffeebreak])} />
        <Button Name="Resto do Dia" onClick={()=> setMenu([...lunch])} />
        <div class = "button-Itemsmenu">

            {menu.map(item => 
            <Button className="bt bt-Itemsmenu" Name={item.Name} Price={item.Price} //Additional={item.Additional}
            Option={item.Option}
            onClick ={addOrder} /> )} 
        </div>
        <div>
            {
                order.map(item => 
                <p>
                    {item.Name}
                    {item.Price}
                    {item.quantify}
                    <Button class = "btn-del"title = '🗑' onClick = {deletOrder} > </Button> 
                </p>)
            } <h3>Total: {total}</h3>
        </div>
        </>
            )
           
        
}

export default Itemsmenu;