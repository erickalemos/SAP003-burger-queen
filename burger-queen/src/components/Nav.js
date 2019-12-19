import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Resturant from '../pages/Restaurant'


function Nav(){
    return(
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/Resturant">Home</Link>
            </li>
            <li>
              <Link to="/Kitchen">About</Link>
            </li>
           
          </ul>
        </nav>
        </div>
    )
}

export default Nav;