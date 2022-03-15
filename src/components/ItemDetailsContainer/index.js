import {useEffect, useState} from 'react'
import { getFetch } from '../../helpers/getItems'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(() => {
      getFetch.then(resp => setProducto(resp.find(prod => prod.id === 1)))
        //window.addEventListener('click', funcionX()=>{consoloe})
        return ()=>{
          //window.removeEventListener('click')
          <>
          
          </>
        }
    }, [])

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer