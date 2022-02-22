import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <header>
    <div>
        <h2>CARSHOP</h2>
    </div>
    <div className='itemsContainers'>
        <a className="link" aria-current="page" >SUV</a>
        <a className="link" aria-current="page" >SEDAN</a>
        <a className="link" aria-current="page" >HATCHBACK</a>
        <a className="link" aria-current="page" >PICKUP</a>
    </div>
    </header>

  )
}

export default Navbar;