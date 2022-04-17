import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from '../Cart';
import CartWidget from '../CartWidget/index';
import './style.css'

const Navbar = () => {
  return (

    <header>
      <div className='headerComputer'>
          <div>
          <NavLink className='pageTitle'to ="/">CARSHOP</NavLink>
          </div>
          <div className='itemsContainers'>
              <NavLink className="link" to="categoria/SUV">SUV</NavLink>
              <NavLink className="link" to="categoria/SEDAN">SEDAN</NavLink>
              <NavLink className="link" to="categoria/DEPORTIVO">DEPORTIVO</NavLink>
              <NavLink className="link" to="categoria/HATCHBACK">HATCHBACK</NavLink>
              <NavLink className="link" to="categoria/PICKUP">PICKUP</NavLink>
          </div>

      <NavLink to ="cart">
        <CartWidget />
      </NavLink>
      </div>
    </header>

  )
}

export default Navbar;