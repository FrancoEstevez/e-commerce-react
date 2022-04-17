import { useCartContext } from "../CartContext/cartContext";
import './style.css';
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, emptyCart, substractItem, totalPrice } = useCartContext()
  return (
    <div className="container container-fluid">
      <div>
        {cartList.length > 0 ?
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
              <div className="rightContainer">
                <div className="rightContainer">
                  Total: U$D{totalPrice()}
                </div>
              </div>
            </div>
            <div className="emptyCartBtn">
              <button className="btn btn-outline-secondary" onClick={emptyCart}>
                Empty Cart
              </button>
            </div>
            <div className="finishShoppingBtn">
              <Link to="/AccountForm">
                <button className="btn btn-outline-success">
                  Finish Shopping
                </button>
              </Link>
            </div>            
          </div>
          :
          <div className="cartBanner">
            <div className="cartBannerHeader">
              <p className="cartBannerText">Your cart is empty.</p>
              <p className="cartBannerText">
                Start shopping through the varity of books in our page.{" "}
              </p>
            </div>
            <Link to="/">
              <button className="cartBtn btn btn-outline-success">
                Shop Now
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
