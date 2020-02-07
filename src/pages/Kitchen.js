import '../App.css';
import React, { useState, useEffect} from 'react';
import firebase from'../firebase';
import Button from '../components/button';

function Order() {

  const [data, setData] = useState([]);
  const [processing, setProcessing]= useState([]);

  const pending = data.filter(item=>item.status==='Pendente')
  const done = data.filter(item => item.status==='Pronto');
  const received = data.filter(item => item.status==='Entregue');

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

  const updateStatus = (item, newStatus, statusFilter)=>{
    firebase.firestore().collection('orders')
    .doc(item.id)
    .update({status: newStatus})
    

    const orders = data.map(elem => {
      if(elem === item){
        elem.status = newStatus
        return elem;
      } else {
        return elem;
      }
    })

    const status = orders.filter(item=>item.status=== statusFilter)
    setProcessing([...status])
  }

  return ( 
    <>
      <main className='data-order'>
        <div className='bt-menuStatus'>
          <Button Name='Pendente' className='bt-kitchen' onClick={()=> setProcessing ([...pending])} />
          <Button Name='Pronto' className='bt-kitchen' onClick={()=>  setProcessing([...done])} />
          <Button Name='Entregue' className='bt-kitchen' onClick={()=> setProcessing([...received])} />
        </div>
        <div className='box-cards'>
          {processing.map(item =>     
            <div className='card-item'>
              <div className='divisor'>
                <p><b>{item.Name} - Mesa: {item.table}</b></p> 
              </div>               
              {item.order.map(elem =>                            
                <>
                  <p><b>{elem.quantity}</b> x {elem.Name} </p> 
                </>
              )} 
              {item.status === 'Pendente' ?  <Button className='bt-status' Name='Pronto' onClick={()=> updateStatus(item, 'Pronto', 'Pendente')}/> : false}
              {item.status === 'Pronto' ?  <Button className='bt-status' Name='Entregue' onClick={()=> updateStatus(item, 'Entregue', 'Pronto')}/> : false}
            </div>                                                 
          )}         
        </div>
      </main>      
    </>
  )
}
export default Order;