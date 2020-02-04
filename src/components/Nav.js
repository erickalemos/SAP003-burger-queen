import React from 'react';
import { Link } from 'react-router-dom';
  import '../App.css';
  import Logo from './logo'; 

function Nav(){
    return(
      <>
        <div className='box-logo'>
          <Logo className='logo'/>
        </div>
        <div className='csstabs' >
        <nav className= 'main-nav'>
          <ul className= 'main-menu'>
            <li className='nav-restaurant'>
              <Link to='/Restaurant' className='nav-restaurant'><h3 className ='restaurant'>Restaurante</h3></Link>
            </li>
            <li className='nav-kitchen'>
              <Link to='/Kitchen' className='nav-kitchen'><h3 className ='kitchen'>Cozinha</h3></Link>
            </li>
          </ul>
        </nav>
        </div>
        </>
    )
}

export default Nav;