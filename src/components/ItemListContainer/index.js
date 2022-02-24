import React from 'react'
import Tittle from '../Tittle'

const ItemListContainer = () => {
    return (
        <div>
            <Tittle tittle= {'Tittle'} subtittle='Subtittle' greeting={() => console.log('Saludos')}/>
        </div>
    )
}

export default ItemListContainer;
