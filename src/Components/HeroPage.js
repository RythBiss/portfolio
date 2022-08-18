import React from 'react'
import Constellation from './Constellation'
import Title from './Title'

export default function Hero() {

  return (
    <div className='hero-page-container'>
      <Title />
        <div className='constellation-container'>

          <Constellation className='constellation-component top-left' pattern='Orion'/>
          <Constellation className='constellation-component top-right' pattern='Taurus'/>
          <Constellation className='constellation-component bot-left' pattern='Canis'/>
          <Constellation className='constellation-component bot-right' pattern='Scorpius'/>

          
        </div>
    </div>
  )
}
