import { useState } from "react";
import { Link } from "react-router-dom";
import '../ItemDetail/style.css'

const InputCount= ()=> {
   return (
        <Link to='/cart' >
            <button className="buyButtonDetails" onClick={()=>console.log('ir a cart') } >Finish shopping</button>
        </Link>
    )
}

const ButtonCount= ({handleInter})=> {
    return <button className="buyButtonDetails" onClick={handleInter}>Add to cart</button>
}

const Intercambiabilidad = () => {
    const [inputType, setInputType ] = useState('button')
    const handleInter=()=>{
        setInputType('input')
    }
    return (
        <div>            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad
