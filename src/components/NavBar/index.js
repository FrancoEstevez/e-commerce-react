import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './Navbar.css'

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
      <img className='fotoCarro' src="https://gogeticons.com/frontend/web/icons/data/7/3/9/2/1/shopping%20cart_512.png"/>

      </NavLink>
      </div>
    </header>

  )
}

export default Navbar;