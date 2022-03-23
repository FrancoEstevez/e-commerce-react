import { useParams } from 'react-router-dom';
import { useState } from "react"
import React from 'react';
import './style.css'
import Intercambiabilidad from '../Intercambiabilidad';
import Count from '../Count';
import { Link } from "react-router-dom"
import { useCartContext } from "../CardContext/cartContext"

const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(null)
  const { detailId } = useParams()
  console.log(detailId)
 //  const onAdd = (item) => console.log(item);

  const { agregarCart, cartList } = useCartContext()

  const onAdd = cant =>{
    console.log(cant)
    setCount(cant)
    agregarCart({ ...producto, cantidad: cant })
  }
  console.log(cartList)

  return (
    <div>
      <div className='detailcontainer'>
        <img src={producto.image} alt="" className='imageDetail' />

        <div className='infoContainer'>
        <h4>{producto.brand}</h4>
          {producto.model}
          <p> </p>
        <h5>{`U$D ${producto.price} `}</h5>


        
        </div>
      </div>
        <Count initial={1} stock={10} onAdd={onAdd} />
        <Intercambiabilidad />

        <Link to='/cart'>
              <button className='btn btn-outline-primary'>Ir al Cart</button>
        </Link> 
    </div>
  )
}

export default ItemDetail