import React, { useState } from 'react'
import Constellation from './Constellation'

export default function ContentBlock(props) {

  return (
    <div ref={props.setRef} className={`major-content-container ${props.bgStyle}`} >
      <div className='minor-content-container'>
        <h1 className={`content-title ${props.titleStyle}`}>{`${props.title}`}</h1>
          <div className={`content-text ${props.textStyle}`}>
            {props.text}
          </div>
      </div>
    </div>
  )
}