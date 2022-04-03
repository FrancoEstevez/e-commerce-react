import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailsContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart/index';
import CartContextProvider from './components/CartContext/cartContext';


function App()   {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
              <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
