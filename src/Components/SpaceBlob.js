import React, { useState } from 'react'

export default function SpaceBlob(props) {

const [r1,setR1] = useState(0);
const [time, setTime] = useState(0);
const [radius, setRadius] = useState(0);

const blob_1 = document.getElementById('circle-1');

//const animateScaleOne = setInterval(animateRescale, 100, 375, 50, 1000);

function animateRescale(begin, change, duration){
  setRadius(easeInOutSine(time, begin, change, duration));
  setTime(time + 1);
  setR1(radius);
}

//https://spicyyoghurt.com/tools/easing-functions
function easeInOutSine (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}


  return (
    <div className={props.styling}>
      <svg className='blob-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
        <defs>
          <linearGradient id="NovaGrad" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse" >
            <stop offset="0%" stop-color="#1508cf" />
            <stop offset="100%" stop-color="#fb00ff" />
          </linearGradient>
        </defs>
        <g >
          <circle id='circle-1' className='blob-circle' cx="450" cy='450' r="350" /*{r1}*/ fill="url(#NovaGrad)"/>
          <circle id='circle-2' className='blob-circle' cx="720" cy="500" r="350.5" fill="url(#NovaGrad)"/>
          <circle id='circle-3' className='blob-circle' cx="450" cy="650" r="350.5" fill="url(#NovaGrad)"/>
          <circle id='circle-4' className='blob-circle' cx="230" cy="600" r="225" fill="url(#NovaGrad)"/>
          <circle id='circle-5' className='blob-circle' cx="700" cy="350" r="200" fill="url(#NovaGrad)"/>
          <circle id='circle-6' className='blob-circle' cx="700" cy="825" r="250" fill="url(#NovaGrad)"/>
        </g>
      </svg>;

      <div className='splashText'>
        <h1 className='textLight'>
          Davd Schaarschmidt
        </h1>
        <div id='line'/>
        <h1 className='textLight'>
          Frontend Developer
        </h1>
      </div>
    </div>
  )
}