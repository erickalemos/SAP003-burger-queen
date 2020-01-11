// import React, { useState, useEffect} from 'react';
// import firebase from'../firebase';
// import Button from './button';

// function Order(props) {

//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     firebase.firestore().collection('orders')
//     .onSnapshot((snapshot)=> {
//         const pedidos = snapshot.docs.map((doc)=>({
//             id:doc.id,
//             ...doc.data()            
//         }))
//         setData(pedidos)
//     })
//   },[])

//   const statusReady = (item)=>{
//     firebase.firestore().collection('orders')
//     .doc(item.id)
//     .update({status:"Pronto"})
//   }

//   const statusDelivered = (item)=>{
//    firebase.firestore().collection('orders')
//   .doc(item.id)
//   .update({status:"Entregue"})

// }

// console.log("data",data)
//  const statusPending = data.filter(item => item.status==="pendente");
//  const statusR = data.filter(item => item.status==="Pronto");
//  const statusD = data.filter(item => item.status==="Entregue");

//      return ( 
        
//         <main className="data-order">
//             <h3 className="title-pending">Pedidos Pendentes</h3>
//             {statusPending.map(item => 
//                <div className="card-item">
//                    <b>{item.status}</b><br/>
//                    {item.form}                
//                    {item.order.map(elem =>
//                    <>
//                    <p>{elem.Name}</p> 
//                    <p>{elem.quantity}</p> 
//                     </>
//                    )}
//                    <Button className="status" Name="Pronto" onClick={()=> statusReady(item)}/>
                   
//                 </div> 
//                             )}
//             <h3>Pedidos Pronto</h3> 
//             {statusR.map(item => 
//                <div className="card-item">
//                    {item.form}
//                    {item.status}
//                    {item.order.map(elem =>
//                    <>
//                    <p>{elem.Name}</p> 
//                    <p>{elem.quantity}</p> 
//                     </>
//                    )}
//                    <Button className="status" Name="Entregue" onClick={()=> statusDelivered(item)}/>
//                 </div> 
//               )}               

//          </main>

//        )
//       }
// export default Order;