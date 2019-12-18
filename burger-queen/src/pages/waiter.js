import React from 'react';
import './App.css';


function Menu() {
  const [data, setData ]= useState([]);
  useEffect (()=> { db.collection('menu').get()
    .then((snapshot) => {
      const newDatas = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      setData(newDatas)
    })
  
},[])
return data
}

export default Menu;