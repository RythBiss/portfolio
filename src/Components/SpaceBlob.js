import React from 'react'

const Blob = 

<svg width="1024" height="800" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="starBlob">
        <circle className='blob' cx="362.5" cy="393.5" r="350.5" fill="#ad13b0"/>
        <circle className='blob' cx="657.5" cy="542.5" r="350.5" fill="#ad13b0"/>
        <circle className='blob' cx="418" cy="658" r="312" fill="#ad13b0"/>
        <circle className='blob' cx="645.5" cy="303.5" r="249.5" fill="#ad13b0"/>
        <circle className='blob' cx="674.5" cy="817.5" r="162.5" fill="#ad13b0"/>
        <circle className='blob' cx="166" cy="607" r="116" fill="#ad13b0"/>
    </g>
</svg>;

export default function SpaceBlob(props) {
  return (
    <div className={props.styling}>{Blob}</div>
  )
}
