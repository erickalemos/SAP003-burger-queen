import React, { useState} from 'react';
import coffee from'./coffeebreak';
import lunch from'./lunch';
import Button from '../components/button';
import db from'../firebase';

function Order(props) {
   //  const [order, setOrder] = useState([]);
     
     return ( 
        
        <div class="data-order">
        <h3> Seu Pedido </h3> 
        <form class="clientInformation">
        <input type ="text" placeholder ="Nome do Cliente e número da mesa" id= "dataOrder"></input> 
        <Button name= 'Enviar Pedido'></Button>
{/* 
const name = document.getElementById("dataOrder").value;
     db.collection('orders').add({
      Name: name,
      Order:order,   
      uid: uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),    
    }) */}
        <h4>Dados do pedido</h4>

        {/* <Count /> */}
       
       
        </form>
        </div>

       )
      }


  
     
  




export default Order;