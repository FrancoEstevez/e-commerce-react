import { useCartContext } from "../CartContext/cartContext"
import './cartWidget.css'

function Cart() {
  const { cartList, emptyCart, substractItem, totalPrice } = useCartContext()
  console.log(cartList)
  return (
    <div>
      <div className="leftContainer">
        <div>
          {cartList.map(product => (
            <div className="cartItemContainer" key={product.id}>
                <img src={product.image} alt="" className='imageCart' />
              <div className="infoItemCart">
                <p className="cartCarName">{`${product.brand} ${product.model}`}</p>
                <p>U$D{product.price}</p>
                <p>amount: {product.cantidad}</p>
              </div>
              <button className="deleteCartItems" onClick={() => { substractItem(product) }}>{product.cantidad === 1 ? "x" : "-"}</button>
            </div>
          ))}
        </div>
        <button className="emptyCart" onClick={emptyCart}>Empty cart</button>
      </div>
      <div className="rightContainer">
            Total: U$D{totalPrice()}
      </div>
    </div>
  )
}

export default Cart
