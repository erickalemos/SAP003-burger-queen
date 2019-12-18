import React, {useState, useEffect} from 'react';
import Coffeebreak from './components/coffebreak';
import Lunch from './components/lunch'

// import db from './firebase';
// import Button from './components/button';


function App() {
 
  return (
  
    <div className="App">
     <h1>Burger Queen</h1>
     <Coffeebreak /> <br/><br/>
     <Lunch />
    </div>
  );
}

export default App;
