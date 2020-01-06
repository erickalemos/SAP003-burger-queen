import React, {useState} from 'react';
import Menu from './menu';
import Button from './button';
import '../App.css';
// import addOrder from './order';

//const [noteOrder, setNoteOrder] = useState([]);

const Coffeebreak = () => {
     const [order, setOrder] = useState([]); 
    

    const addOrder = (item)=>{ 
     setOrder([...order, item])
    // console.log('valor', item.Name, item.Price);
    (<p>{item}</p>)
}

    const coffeeitems = Menu();
    return (
        <>
            {coffeeitems.map((item)=> item.breakfast === true ?
            <Button 
                className= "bt bt-coffee"
                Name={item.Name} Price={item.Price} 
                onClick ={addOrder}
            />:false 
            // if(item.Additional){
                // console.log(item.Additional)
            //     <input type="checkbox" id="additional" name="scales">
            //    <label>{item.Additional}</label> }
    )}          
        </> 
            )

}
// //adicionar pedidos feitos
// function noteOrders(item){
//     setNoteOrder(estadoAtual => [...estadoAtual, item])
// }
// // deletar pedidos
// const deletOrder = (item) => {
//     const indexItem = (order.indexOf(item));
//     order.splice(indexItem,1);
//     setOrder([...order]);
// }
// //somar pedidos
// const sumOrder = order.reduce((accumulator, item) => accumulator + item.Price,0) ;

export default Coffeebreak;