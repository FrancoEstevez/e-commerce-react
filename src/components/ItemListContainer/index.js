import React, { useState, useEffect } from "react";
import Tittle from "../Tittle";
import Count from "../Count";
import getFetch from "../../helpers/getFetch";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch
    .then((answer)=> {
      return answer
    })
    .then((resp) => setProducts(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))    
  }, [])
  
    const onAdd = (cant) => {
       console.log(cant) 
    }

  console.log(products)

  return (
    <div>
      <div style={{ width: 300, margin: "auto", alignContent: "space-around" }}>
      <Tittle tittle= {'Tittle'} subtittle='Subtittle' greeting={() => console.log('Saludos')}/>
        <Count initial={1} stock={9} onAdd={onAdd} />
      </div>
      <div>
        <h1>{ greeting }</h1>
        {   loading ? <h1>Loading...</h1>
            :
            products.map((prod) => <div 
                                        key={prod.id}
                                        className='card col-md-4'
                                        style={{width: 400, margin: 50, display: 'inline-block', borderRadius: 8}}
                                    >   <div className='card-img-top'>
                                          <img src={prod.foto} alt='' className='w-100' style={{height: "200px",  borderRadius: 7}}/>
                                        </div>  
                                        <div className='card-tittle'  style={{fontFamily: "Bebas Neue"}}>
                                          {`${prod.marca} - ${prod.modelo}`}
                                        </div>   
                                        <div className='card-text'>
                                          {`${prod.price} U$D`} 
                                        </div>               
                                        <div className="card-footer" style={{backgroundColor: "#333333", borderRadius: 7}} >
                                          {/* <Link to={`/detalle/${prod.id}`}> */}
                                            <button  className="btn btn-outline-primary btn-block" style={{color: "white", borderColor: "white", marginLeft: "35%"}}>
                                              Car details
                                            </button>                                              
                                          {/* </Link>                                             */}                                                                   
                                        </div>
                                      </div>
                                    
                                    
            
            )
        }
    </div>
  </div>
  );
};

export default ItemListContainer;
