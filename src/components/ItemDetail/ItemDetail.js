import { useParams } from 'react-router-dom';
import React from 'react';
import './style.css'
import Intercambiabilidad from '../Intercambiabilidad';
import Count from '../Count';


const ItemDetail = ({producto}) => {
  const { detailId } = useParams()
  console.log(detailId)
  const onAdd = (item) => console.log(item);
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
    </div>
  )
}

export default ItemDetail