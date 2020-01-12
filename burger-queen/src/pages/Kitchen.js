import '../App.css';
import React, { useState, useEffect} from 'react';
import firebase from'../firebase';
import Button from '../components/button';

function Order() {

  const [data, setData] = useState([]);
  const [processing, setProcessing]= useState([]);
  const [ready, setReady]= useState([]);
  const [history, setHistory] = useState([]);

  // const pending = data.filter(item=>item.status === "Pendente");
  // const done = data.filter(item=>item.status === "Pronto");
  // const received = data.filter(item=>item.status ==="Entregue");

  const statusP = data.filter(item=>item.status==="Pendente")
  const statusR = data.filter(item => item.status==="Pronto");
  const statusD = data.filter(item => item.status==="Entregue");

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
                <Button className="status" Name="Pronto" onClick={()=> statusReady(item)}/>                   
                </div>                               
              )}
          </>
          <>
            <Button Name="Pronto" className="bt-menu" onClick={()=> setReady([...statusR])} />
            {ready.map(item =>   
              <div className="card-item">
                <p>{item.form}</p>                
                {item.order.map(elem => 
                  <>
                    <p>Item: {elem.Name}</p> 
                    <p>Quantidade: {elem.quantity}</p> 
                  </>  
                )} 
                <Button className="status" Name="Pronto" onClick={()=> statusDelivered(item)}/>                   
              </div>   
            )}
          </>
          <>
            <Button Name="Entregue" className="bt-menu" onClick={()=> setHistory([...statusD])} />
            {history.map(item =>   
              <div className="card-item">
                <p>{item.form}</p>                
                {item.order.map(elem => 
                  <>
                    <p>Item: {elem.Name}</p> 
                    <p>Quantidade: {elem.quantity}</p> 
                  </>  
                )}
              </div>  
            )}
          </>
              </div>
          </div>
    </main>      
  </>
  )
}
export default Order;