import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import './style.css'

const ItemDetail = ({producto}) => {
  const { detailId } = useParams()
  console.log(detailId)
  return (
    <div className='detailcontainer'>
      <img src={producto.image} alt="" className='imageDetail' />

      <div className='infoContainer'>
      <h4>{producto.brand}</h4>
        {producto.model}
        <p> </p>
      <h5>{`U$D ${producto.price} `}</h5>
      <button className="buyButtonDetails">Buy</button>

      </div>

    </div>
  )
}

export default ItemDetail