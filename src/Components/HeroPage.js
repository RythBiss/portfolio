import React from 'react'
import Constellation from './Constellation'
import Title from './Title'

export default function Hero() {

  return (
    <div className='hero-page-container'>
      
      <Title />
        <div className='constellation-container'>

          <Constellation className='top-right' pattern='Orion' navTo='Skills'/>
          <Constellation className='bot-left' pattern='Taurus' navTo='Work'/>
          <Constellation className='bot-right' pattern='Canis' navTo='Contact'/>
          <Constellation className='top-left' pattern='Scorpius' navTo='About'/>

          
        </div>
    </div>
  )
}
