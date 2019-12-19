import React, {useEffect, useState} from 'react';
import db from '../firebase'
import MenuCard from '../components/MenuCard'

function Restaurant2() {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        db.collection('menu').get()
        .then(snapshot =>{
        snapshot.forEach(doc =>{
            setMenu((currentState)=>[...currentState,doc.data()]);
            //doc.data();
       })
    })
    },[])

    return (
    // <div>{menu.map(menuitem => <p>{menuitem.Name}</p>)}</div>
    <div>{menu.map(menuitem => 
    <MenuCard name= {menuitem.Name} price = {menuitem.Price}
    
    />)}</div>
    )
}

export default Restaurant2;