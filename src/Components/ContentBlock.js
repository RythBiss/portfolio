import React, { useState } from 'react'

export default function ContentBlock(props) {

  return (
    <div className='majorSegLight' >
      <div className={`content-container ${props.pos}`}>
        <h1 className='content-title' >{`${props.title}`}</h1>
        <p className='content-text'>
          {props.text}
        </p>
      </div>
    </div>
  )
}