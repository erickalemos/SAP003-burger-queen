import React from 'react';
import { Link } from "react-router-dom";
  import '../App.css';
  import Logo from './logo'; 

function Nav(){
    return(
      <>
        <div className="box-logo">
          <Logo className="logo"/>
        </div>
        <div id="csstabs" className="csstabs" >
        <nav className= "main-nav">
          <ul className= "main-menu">
            <li id="tab1">
              <Link to="/Restaurant" id="tab1"><h3>Restaurante</h3></Link>
            </li>
            <li id="tab2">
              <Link to="/Kitchen" id="tab2"><h3>Cozinha</h3></Link>
            </li>
          </ul>
        </nav>
        </div>
        </>
    )
}

export default Nav;