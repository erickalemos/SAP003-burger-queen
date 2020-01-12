import '../App.css';
import React, { useState, useEffect} from 'react';
import firebase from'../firebase';
import Button from '../components/button';

function Order() {

  const [data, setData] = useState([]);
  const [processing, setProcessing]= useState([]);
  // const [ready, setReady]= useState([]);
  // const [history, setHistory] = useState([]);

  const pending = data.filter(item=>item.status === "Pendente");
  const ready = data.filter(item=>item.status === "Pronto");
  const history = data.filter(item=>item.status ==="Entregue");

  const statusP = data.filter(item=>item.status==="Pendente")
  const statusR = data.filter(item => item.status==="Pronto");
  const statusD = data.filter(item => item.status==="Entregue");

  
  console.log(pending);
  console.log(ready)
  console.log(history)

  useEffect(()=>{
    firebase.firestore().collection('orders')
    .onSnapshot((snapshot)=> {
        const order = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()            
        }))
        setData(order)
    })
  },[])

  const statusReady = (item)=>{
    firebase.firestore().collection('orders')
    .doc(item.id)
    .update({status:"Pronto"})
  }

  const statusDelivered = (item)=>{
  firebase.firestore().collection('orders')
  .doc(item.id)
  .update({status:"Entregue"})

}



return ( 
  <>
    <main className="data-order">
      <div className="box-cards">
        <div className="bt-menuStatus">
          <>
            <Button Name="Pendente" className="bt-menu" onClick={()=> setProcessing ([...statusP])} />
              {processing.map(item =>   
                
                
                <div className="card-item">
                <p>{item.form}</p>                
                {item.order.map(elem => 
                           
                    <>
                      <p>Item: {elem.Name}</p> 
                      <p>Quantidade: {elem.quantity}</p> 
                    </>
                  
                )} 
                <Button className="status" Name="Pronto" onClick={()=> statusReady(item)}/>                   */}
                </div>   
                
                
                )}
              <Button Name="Pronto" className="bt-menu" onClick={()=> setData([...ready])} />
              

              <Button Name="Entregue" className="bt-menu" onClick={()=> setData([...history])} />
              </>
              </div>
          </div>
    </main>      
  </>


)
      }
export default Order;

// {/*           
        // <main className="data-order">
        //     <h3 className="title-pending">Pedidos Pendentes</h3>
        //     <div class="box-cards pending">
        //     {statusP.map(item =>  */}
        {/* //       <div className="card-item">
        //         Nome e mesa do cliente:{item.form}                
        //         {item.order.map(elem => */}
        {/* //           <>
        //             <p>Item: {elem.Name}</p> 
        //             <p>Quantidade: {elem.quantity}</p> 
        //           </>
        //         )}
        //         <Button className="status" Name="Pronto" onClick={()=> statusReady(item)}/>                  
        //         </div>  */}
                
        {/* //                     )}</div>
        //     <h3>Pedidos Pronto</h3> 
        //     <div class="box-cards ready">
        //     {statusR.map(item =>  */}
        {/* //        <div className="card-item">
        //            {item.form}
        //            {item.status}
        //            {item.order.map(elem => */}
        {/* //            <>
        //            <p>{elem.Name}</p> 
        //            <p>{elem.quantity}</p> 
        //             </>
        //            )}
        //            <Button className="status" Name="Entregue" onClick={()=> statusDelivered(item)}/>
        //         </div> 
                
        //       )}    </div>            */}
{/* 
        //  </main> */}



        // useEffect(()=>{
//   firebase.firestore().collection('orders')
//   .onSnapshot((snapshot)=>{
//     const pedidoP = snapshot.docs.map((doc)=>({
//       status:doc.status,
//       ...doc.data()
//     }))
//     setPeding(pedidoP)
//     console.log(pedidoP)
//   })
// })