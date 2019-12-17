import React from 'react';
import './App.css';

import db from './firebase';


db.collection('menu').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

function App() {
  return (
    <div className="App">
     <h1>Tentativa firebase</h1>
    </div>
  );
}

export default App;