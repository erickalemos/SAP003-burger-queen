import React, {Component} from 'react';
import {
    BrowserRouter as Router,
     Link
  } from "react-router-dom";
  import '../App.css';

function Nav(){
    return(
        <div id="csstabs" class="csstabs" >
        <nav class= "main-nav">
          <ul class= "main-menu">
            <li>
              <Link to="/Restaurant" id="tab1">Restaurant</Link>
            </li>
            <li>
              <Link to="/Kitchen" id="tab2">Kitchen</Link>
            </li>
           
          </ul>
        </nav>
        </div>
    )
}

export default Nav;