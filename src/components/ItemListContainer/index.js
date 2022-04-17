import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    if (categoriaId) {
        const queryColection = collection(db, 'products')
        const queryFilter = query( queryColection, where('categoria', '==', categoriaId), limit(3)  )
        getDocs(queryFilter)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    }else{
        const queryColection = collection(db, 'products')
        getDocs(queryColection)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }

}, [categoriaId])

  return (
    <>
    <h1>{greeting}</h1>
    <h6>{categoriaId}</h6>

      {loading ? <p> Loading... </p> : <ItemList items={items} />}
  </>
    ) 
};

 export default ItemListContainer;
