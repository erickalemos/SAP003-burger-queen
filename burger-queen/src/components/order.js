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
        <input type ="text" placeholder ="Nome do Cliente e número da mesa"></input> 
        <Button name= 'Enviar Pedido'></Button>
{/* 
     db.collection('orders').add({
      NavigationPreloadManager  
      post: post,
      likes: 0,    
      uid: uid,
      privacy: optionPost,
      idname: firebase.auth().currentUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),    
    }) */}
        <h4>Dados do pedido</h4>

        {/* <Count /> */}
       
       
        </form>
        </div>

       )
      }


  
     
  




export default Order;