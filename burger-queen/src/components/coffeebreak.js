// import React, {
//     useState, useReducer
// } from 'react';
// import Menu from './menu';
// import Button from './button';
// import '../App.css';

// //const [noteOrder, setNoteOrder] = useState([]);

// const Coffeebreak = () => {
//         const [order, setOrder] = useState([]);
//         // const stateInitial = {count: 0};


//         const addOrder = (item) => {
//             setOrder([...order, item])

//         }
//         const total = order.reduce((accumulator, item) => accumulator + item.Price, 0);

//         // deletar pedidos
//         const deletOrder = (item) => {
//             const indexItem = (order.indexOf(item));
//             order.splice(indexItem, 1);
//             setOrder([...order]);
//         }

//         // função de incrementar
//         // function reducer(state, action) {
//         //     switch (action.type) {
//         //       case 'incrementar':
//         //         return { count: state.count + 1 }
//         //       case 'decrementar':
//         //         return { count: state.count - 1 }
//         //       default:
//         //         return state
//         //     }
//         //   }
           
        
//         // function Counter({ stateInitial }) {
//         //     const [state, dispatch] = useReducer(reducer, stateInitial );
//         //     return (
//         //       <>
//         //         Count: {state.count}
//         //         <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
//         //         <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
//         //       </>
//         //     );
//         //   }
          
//         const coffeeitems = Menu();
//         return ( 
//             <>
//                 <div class = "button-coffee"> 
//                     {coffeeitems.map((item) => item.breakfast === true ?
//                         <Button 
//                             className = "bt bt-coffee"
//                             Name = {item.Name}
//                             Price = {item.Price}
//                             onClick = {addOrder}
//                         />:false)} 
//                 </div>  
//                 <div> 
                    
//                     {order.map(item =><span> 
//                         {item.Name} 
//                         {item.Price} 
//                         <Button class = "btn-del"title = '🗑' onClick = {deletOrder} > </Button> 
//                          {/* function Counter({ stateInitial }) {
//                             const [state, dispatch] = useReducer(reducer, stateInitial );
           
//                         <>
//                             Count: {state.count}
//                             <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
//                             <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
//                         </> */}
            
//           {/* } */}
//                     </span>)} 
//                     <h2> Total: {total} </h2>
//                 </div> 
//                 </>
//             )

//         }

//         export default Coffeebreak;