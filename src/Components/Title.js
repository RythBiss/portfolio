import React, { useState, useEffect } from 'react'

export default function Title() {

  return (
    <div className='splash-text-container'>
      {/* <SpaceBlob styling='starBlob' r={circleR}/> */}
      <h1 className='title-text'>
          David Schaarschmidt
        </h1>
        <div id='seperator'/>
        <h1 className='title-text'>
          Frontend Developer
        </h1>
    </div>
  )
}
