import React from 'react';
import {
    BrowserRouter as Router,
     Link
  } from "react-router-dom";
  import '../App.css';

function Nav(){
    return(
        <div id="csstabs" className="csstabs" >
        <nav className= "main-nav">
          <ul className= "main-menu">
            <li id="tab1">
              <Link to="/Restaurant" id="tab1"><h3>Restaurant</h3></Link>
            </li>
            <li id="tab2">
              <Link to="/Kitchen" id="tab2"><h3>Kitchen</h3></Link>
            </li>
           
          </ul>
        </nav>
        </div>
    )
}

export default Nav;