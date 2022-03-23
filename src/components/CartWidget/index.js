// import React from 'react'
// import './CartWidget.css'

// const CartWidget = () =>{
//     return(
//         <p>Cart</p>
//     )
// }

// export default CartWidget;

import { useCartContext } from "../CardContext/cartContext"


function Cart() {
    const { cartList, vaciarCart } = useCartContext()
    console.log(cartList)
    return (
      <div>
        cart
        { cartList.map(productos => <li>nombre: {productos.brand} precio: {productos.price} cantidad:{productos.cantidad}</li>) }
        <button onClick={vaciarCart}>VaciarCarrto</button>
      </div>
    )
}

export default Cart
