import {useEffect, useState} from 'react';
import { getFetch } from '../../helpers/getItems';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [producto, setProducto] = useState();
    const { detailId } = useParams();

    useEffect(() => {
      setLoading(true)
      getFetch(detailId)
        .then(resp => setProducto(resp))
        .finally(setLoading(false))
    }, [])

    return (loading || !producto) ? <p> Cargando... </p> : <ItemDetail producto={producto} />
}

export default ItemDetailContainer