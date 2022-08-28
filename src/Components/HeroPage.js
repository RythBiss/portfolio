import React from 'react'
import Constellation from './Constellation'
import Title from './Title'

export default function Hero() {

  return (
    <div className='hero-page-container'>
      <div id='title-container'>
        <Title />
        <ul id='navBar'>
          <li className='navButton' >Home</li>
          <li className='navButton' >About</li>
          <li className='navButton' >Skills</li>
          <li className='navButton' >Work</li>
          <li className='navButton' >Contact</li>
        </ul>
      </div>
    </div>
  )
}
