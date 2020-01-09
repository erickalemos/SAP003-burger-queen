import {useEffect, useState} from 'react';

import firebase from '../firebase';


function Menu() {
  const [data, setDatas ]= useState([]);
  useEffect (()=> { firebase.firestore().collection('menu').get()
    .then((snapshot) => {
      const newDatas = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      setDatas(newDatas)
    })
  
},[])
return data
}

export default Menu;