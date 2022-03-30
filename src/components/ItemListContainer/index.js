import React, { useState, useEffect } from "react";
import { getItems } from "../../helpers/getItems"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams()
  
    useEffect(() => {
        const db = getFirestore()
        const queryColection = collection(db, 'items')
        const queryFilter = query( queryColection, where('price', '>=',1000) , limit(1) )
        getDocs(queryFilter)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))     
    },[])

    // useEffect(() => {
    //   if (categoriaId) {
    //     getItems()
    //     .then((respuesta)=> {
    //       return respuesta
    //     })
    //     .then((resp) => setItems( resp.filter(pro => pro.categoria===categoriaId) ))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))      
        
    //   }else{
    //     getItems()
    //     .then((respuesta)=> {
    //       return respuesta
    //     })
    //     .then((resp) => setItems(resp))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))      
    //   }


  // }, [categoriaId])

    console.log(items)
  return loading ? <p> Cargando... </p> : <ItemList items={items} />;
};

 export default ItemListContainer;
