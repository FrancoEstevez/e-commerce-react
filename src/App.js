import React from 'react'
import ItemDetailContainer from './components/ItemDetailsContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App()   {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App
