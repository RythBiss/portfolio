import React from 'react'

const Blob = 


<svg className='Blob' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="NovaGrad" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse" >
      <stop offset="0%" stop-color="#1508cf" />
      <stop offset="100%" stop-color="#fb00ff" />
    </linearGradient>
  </defs>
  <g >
    <circle className='BlobSeg' cx="370" cy="370" r="350.5" fill="url(#NovaGrad)"/>
    <circle className='BlobSeg' cx="650" cy="500" r="350.5" fill="url(#NovaGrad)"/>
    <circle className='BlobSeg' cx="370" cy="650" r="350.5" fill="url(#NovaGrad)"/>
    <circle className='BlobSeg' cx="150" cy="500" r="225" fill="url(#NovaGrad)"/>
    <circle className='BlobSeg' cx="700" cy="200" r="200" fill="url(#NovaGrad)"/>
    <circle className='BlobSeg' cx="700" cy="800" r="250" fill="url(#NovaGrad)"/>
  </g>
</svg>;

export default function SpaceBlob(props) {
  return (
    <div className={props.styling}>{Blob}</div>
  )
}
