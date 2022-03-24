import { useCartContext } from "../CartContext/cartContext"

function Cart() {
    const { cartList, emptyCart, substractItem } = useCartContext()
    console.log(cartList)
    return (
      <div>
        <ul>
          cart
          { cartList.map(product => (
            <li key={product.id}>
               nombre: {product.brand} precio: {product.price} cantidad:{product.cantidad}
              <button onClick={() => {substractItem(product)}}>{product.cantidad === 1 ? "x" : "-"}</button>
            </li>
          ))}
        </ul>
        <button onClick={emptyCart}>Vaciar carrito</button>
      </div>
    )
}

export default Cart
