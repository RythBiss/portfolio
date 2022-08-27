import React, { useState } from 'react'
import Constellation from './Constellation'

export default function ContentBlock(props) {

  return (
    <div className={`major-content-container ${props.className}`} >
      <div className={`content-container ${props.pos}`}>
        <h1 className='content-title' >{`${props.title}`}</h1>
        <p className='content-text textLight'>
          {props.text}
        </p>
        <>
          {props.content}
        </>
      </div>
    </div>
  )
}