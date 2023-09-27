import React from 'react'
import foto1 from '../assets/img/foto1.png'

const Photos = () => {
    return (
      <div className='img-container'>
          <h1>Pendientes Canarios</h1>
          <img src={foto1} alt="Primera foto" />
          <h3>35€</h3>
      </div>
      
  )
}

export default Photos