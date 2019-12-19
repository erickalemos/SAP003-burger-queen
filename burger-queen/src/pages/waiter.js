// import React,{useEffect, useState} from 'react';

// import db from '../firebase';


// function Menu() {
//   const [data, setDatas ]= useState([]);
//   useEffect (()=> { db.collection('menu').get()
//     .then((snapshot) => {
//       const newDatas = snapshot.docs.map((doc) => ({
//         ...doc.data()
//       }))
//       setDatas(newDatas)
//     })
  
// },[])
// return data
// }

// export default Menu;