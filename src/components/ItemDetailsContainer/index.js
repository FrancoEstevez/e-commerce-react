import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState();
    const { detailId } = useParams();

    useEffect(() => {
      setLoading(true)
      const db = getFirestore()
      const queryDb = doc(db, 'products', detailId)
      getDoc(queryDb)
      .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
      .catch(err => console.log(err))
      .finally(() =>setLoading(false))
    }, [])

    return (loading || !producto) ? <p> Cargando... </p> : <ItemDetail producto={producto} />
}

export default ItemDetailContainer