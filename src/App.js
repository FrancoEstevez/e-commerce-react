import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailsContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget/index';



function App()   {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartWidget />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
