import React, {useState, useEffect} from 'react';
// import Coffeebreak from './components/coffeebreak';
// import Lunch from './components/lunch';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurant from './pages/Restaurant';
import Kitchen from './pages/Kitchen';
import Nav from './components/Nav';

// import db from './firebase';
// import Button from './components/button';
function App() {
  return (
    <Router>
      <Nav />
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/Resturant">Home</Link>
            </li>
            <li>
              <Link to="/Kitchen">About</Link>
            </li>
           
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div>
        <Switch>
          <Route path="/Kitchen">
            <div>Pedidos em andamento</div>
            <Kitchen />
          </Route>
          <Route path="/Restaurant">
          {/* <div>Faça seu pedido</div> */}
          <Restaurant />
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// function App() {
 
//   // return (
  
//   //   <div className="App">
//   //    <h1>Burger Queen</h1>
//   //    <h3>Café da Manhã</h3>
//   //    <Coffeebreak /> <br/><br/>
//   //    <h3>Resto do Dia</h3>
//   //    <Lunch />
//   //    <div>
//   //    <h4>Pedido</h4>
//   //      {/* <Order /> */}
//   //    </div>
//   //   </div>
//   // );
// return(
//   <div>Aiaiai</div>
// )

// }

export default App;
