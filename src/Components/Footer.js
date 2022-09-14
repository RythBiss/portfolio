import React from 'react'

export default function Footer(props) {
  return (
    <div ref={props.setRef} className='footer'>
        <h2>Get in touch!</h2>
        <h3>Email: dkschaarschmidt@gmail.com</h3>
    </div>
  )
}