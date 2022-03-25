import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const getCount = (id) => {
       const productInCart = cartList.find(product => product.id === id)
       if (productInCart) {
        return productInCart.cantidad
       } else return 0
    }
    const addItem = (product) => {
        // cantidad = 0, agregar al carrito con cantidad
        if (getCount(product.id) === 0) {
            setCartList( [ ...cartList, product] )
        } else {
            // si la cantidad > 0, sumar la cantidad
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id)
            const temporalCartList = [...cartList]
            temporalCartList[index].cantidad = cartList[index].cantidad + product.cantidad
            setCartList([...temporalCartList]) 
        }
    }
    const substractItem = (product) => {
        if (getCount(product.id) > 1) {
            // cantidad > 1, resto la cantidad
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id)
            const temporalCartList = [...cartList]
            temporalCartList[index].cantidad = cartList[index].cantidad - 1
            setCartList([...temporalCartList]) 
        } else {
            // eliminar si cantidad = 1
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id);
            if (index > -1) {
                const temporalCartList = [...cartList]
                temporalCartList.splice(index, 1);
                setCartList([...temporalCartList]) 
            }
        }
        
    }

    const emptyCart = () => {
        setCartList( [])
    }

    const totalPrice = () => {
        let price = 0
        cartList.forEach(cartProduct => {
            price = price + (cartProduct.price * cartProduct.cantidad)
        })
        return price;
    } 

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            emptyCart,
            substractItem,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
