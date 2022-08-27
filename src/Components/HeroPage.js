import React from 'react'
import Constellation from './Constellation'
import Title from './Title'

export default function Hero() {

  return (
    <div className='hero-page-container'>
      <Title />
        <div className='constellation-container'>

          <Constellation className='top-left' pattern='Orion' navTo='About'/>
          <Constellation className='top-right' pattern='Taurus' navTo='Skills'/>
          <Constellation className='bot-left' pattern='Canis' navTo='Work'/>
          <Constellation className='bot-right' pattern='Scorpius' navTo='Contact'/>

          
        </div>
    </div>
  )
}
