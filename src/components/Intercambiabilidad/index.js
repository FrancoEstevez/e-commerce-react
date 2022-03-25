import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button className="interBtn btn btn-outline-secondary" onClick={()=>console.log('ir a cart') } >Finish shopping</button>
        </Link>
    )
}



const ButtonCount= ({handleInter})=> {
    return <button className="interBtn btn btn-outline-success" onClick={handleInter}>Add to cart</button>

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
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
