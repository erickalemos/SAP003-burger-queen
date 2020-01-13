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
    .then(()=> {
      setReady([...ready, {...item, status:"Pronto"}])
    })
    if(item.status === "Pronto"){
      const index = data.findIndex((i) => 
        i.id === item.id
      )
      data.splice(index,1)
    }
  }

  const statusDelivered = (item)=>{
  firebase.firestore().collection('orders')
  .doc(item.id)
  .update({status:"Entregue"})
  .then(()=> {
    setHistory([...history, {...item, status:"Entregue"}])
  })
  if(item.status === "Entregue"){
    const index = data.findIndex((i) => 
      i.id === item.id
    )
    data.splice(index,1)
  }

}

  return ( 
    <>
      <main className="data-order">
        <div className="box-cards">
          <div className="bt-menuStatus">
            <>
              <Button Name="Pendente" className="bt-kitchen" onClick={()=> setProcessing ([...statusP])} />
                {processing.map(item =>     
                      //  {item.status === "Pendente" ? 
                  <div className="card-item">
                    <div className="divisor">
                      <p><b>{item.name} {item.table}</b></p> 
                    </div>               
                  {item.order.map(elem =>                            
                      <>
                        <p><b>{elem.quantity}</b> x {elem.Name} </p> 
                      </>
                  )} 
                  <Button className="bt-status" Name="Pronto" onClick={()=> statusReady(item)}/>                   
                  </div>   
                  // : null}                            
                )}
            </>
            <>
              <Button Name="Pronto" className="bt-kitchen" onClick={()=>  setProcessing([...statusR])} />
              {ready.map(item =>   
                <div className="card-item">
                    <div className="divisor">
                      <p><b>{item.form}</b></p> 
                    </div>               
                  {item.order.map(elem => 
                    <>
                      <p><b>{elem.quantity}</b> x {elem.Name} </p>  
                    </>  
                  )} 
                  <Button className="bt-status" Name="Entregue" onClick={()=> statusDelivered(item)}/>                   
                </div>   
              )}
            </>
            <>
              <Button Name="Entregue" className="bt-kitchen" onClick={()=> setProcessing([...statusD])} />
              {history.map(item =>   
                <div className="card-item">
                    <div className="divisor">
                      <p><b>{item.form}</b></p> 
                    </div>                
                  {item.order.map(elem => 
                    <>
                      <p><b>{elem.quantity}</b> x {elem.Name} </p> 
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