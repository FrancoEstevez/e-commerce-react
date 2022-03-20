import React, { useState, useEffect } from "react";
import { getItems } from "../../helpers/getItems"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams()
  
    useEffect(() => {
      if (categoriaId) {
        getItems()
        .then((respuesta)=> {
          return respuesta
        })
        .then((resp) => setItems( resp.filter(pro => pro.categoria===categoriaId) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))      
        
      }else{
        getItems()
        .then((respuesta)=> {
          return respuesta
        })
        .then((resp) => setItems(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))      
      }


  }, [categoriaId])
  return loading ? <p> Cargando... </p> : <ItemList items={items} />;
};

 export default ItemListContainer;
