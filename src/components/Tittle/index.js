import React from 'react'

const Tittle = ({ tittle , subtittle , greeting }) => {
    return (
        <div>
            <h1>{ tittle }</h1>
            <h2   style={{color: 'black'}} >{ subtittle }</h2>
            <button className='btn btn-secondary' onClick={greeting}> saludar </button>
        </div>
    )
}

export default Tittle;
