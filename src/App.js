import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Restaurant from './pages/Restaurant';
import Nav from './components/Nav';
import Order from './pages/Kitchen'

function App() {
  return (
    <Router>
      <header>
        <Nav />             
      </header>
      <Switch>
        <Route path="/Kitchen">
          <Order />
        </Route>
        <Route path="/">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;