import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Restaurant from './pages/Restaurant';
import Kitchen from './pages/Kitchen';
import Nav from './components/Nav';

// import db from './firebase';
// import Button from './components/button';
function App() {
  return (
    <Router>
      <header>
        <Nav />
             {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <div>
          <Switch>
            <Route path="/Kitchen">
              <div></div>
              <Kitchen />
            </Route>
            <Route path="/Restaurant">
            {/* <div>Faça seu pedido</div> */}
            <Restaurant />
            
            </Route>
          </Switch>
      </div>
      </header>
    </Router>
  );
}


export default App;
