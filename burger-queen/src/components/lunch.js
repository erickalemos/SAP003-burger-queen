// import React, {useState} from 'react';
// import Menu from './menu';
// import Button from './button';
// import '../App.css';

// const Lunch = () => {
//     const [order, setOrder] = useState([]);

//     const addOrder = (item)=>{ 
//         setOrder([...order, item])
//         // console.log('valor', item.Price)
//     }
//     const total = order.reduce((accumulator, item) => accumulator + item.Price,0) ;

//     const lunchitems = Menu();
    
    
//     return (
//         <>
//         <div class = "button-lunch">

//             {lunchitems.map((item)=> item.breakfast !== true ?
//             <Button className="bt bt-lunch" Name={item.Name} Price={item.Price} //Additional={item.Additional}
//             Option={item.Option}
//             onClick ={addOrder} />:false )} 
//         </div>
//         <div>
//             {
//                 order.map(item => 
//                 <p>
//                     {item.Name}
//                     {item.Price}
//                 </p>)
//             } <h2>Total: {total}</h2>
//         </div>
//         </>
//             )
           
        
// }

// export default Lunch;