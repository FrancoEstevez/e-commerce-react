import { useParams } from 'react-router-dom';
import { useState } from "react"
import React from 'react';
import './style.css'
import Count from '../Count';
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/cartContext"

const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(null)
  const { detailId } = useParams()

  const { addItem, cartList } = useCartContext()

  const onAdd = cant =>{
    setCount(cant)
    addItem({ ...producto, cantidad: cant })
  }

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
      { count ?
            <Link to='/cart'>
              <button className='finishBtnCount'>Go to Cart</button>
            </Link> 
          :
            <Count initial={1} stock={10} onAdd={onAdd} />
        }
    </div>
  )
}

export default ItemDetail