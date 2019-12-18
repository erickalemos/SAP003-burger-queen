import React, {useState, useEffect} from 'react';
import './App.css';

import db from './firebase';
import Button from './components/button'


function App() {
 
  return (
  
    <div className="App">
     <h1>Tentativa firebase</h1>
     <Button text= "algo" />
    </div>
  );
}

export default App;
