import React, { useState } from 'react'

export default function SpaceBlob(props) {

const [r1,setR1] = useState(0);
const [r2,setR2] = useState(0);
const [r3,setR3] = useState(0);
const [r4,setR4] = useState(0);
const [r5,setR5] = useState(0);
const [r6,setR6] = useState(0);

let time = 0;

function easeInOutSine (t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

function animateRescale(blob, begin, change, duration){
  let radius = easeInOutSine(time, begin, change, duration);
  time++;
  //blob.setAttribute('r', radius);
  //broken, check console for help
  let radiusIndex = blob.substr(7, 1);
  console.log(blob);
}

const blob_1 = document.getElementById('circle-1');
const blob_2 = document.getElementById('circle-2');
const blob_3 = document.getElementById('circle-3');
const blob_4 = document.getElementById('circle-4');
const blob_5 = document.getElementById('circle-5');
const blob_6 = document.getElementById('circle-6');

const animateScaleOne = setInterval(animateRescale, 100, blob_1, r1, 50, 2000);
const animateScaleTwo = setInterval(animateRescale, 100, blob_2, r2, 40, 3000);
const animateScaleThree = setInterval(animateRescale, 100, blob_3, r3, 30, 4000);
const animateScaleFour = setInterval(animateRescale, 100, blob_4, r4, 20, 1000);
const animateScaleFive = setInterval(animateRescale, 100, blob_5, r5, 15, 2000);
const animateScaleSix = setInterval(animateRescale, 100, blob_6, r6, 10, 3000);


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
          <circle id='circle-1' className='blob-circle' cx="450" cy='450' r="350" fill="url(#NovaGrad)"/>
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