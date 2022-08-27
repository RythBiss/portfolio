import React, { useState, useEffect } from 'react'

export default function SpaceBlob(props) {

    //time for animation reasons
    const [time, setTime] = useState(0);

    //duration is a variable so it can be checked later in useEffect
    const duration = 1000;
  
    //ease equation for smooth animation, called in the "r" attribute of each circle in the svg below
    const easeInOutSine = (t, b, c, d) => {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
  
    //resets time to 0 after a full animation for memory conservation
    useEffect(() => {
      //time reset after 2 durations have passed (equation causes animation to go back and forth once, thus the duration * 2)
      if(time >= (duration*2)){
        setTime(0);
      }
    })
  
    //initialize the interval for time
    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
  
      return () => clearInterval(interval);
    }, [])


  return (
    <div className={props.styling}>
      <svg className='blob-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
        <defs>
          <linearGradient id="NovaGrad" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse" >
            <stop offset="0%" stop-color="#1508cf" />
            <stop offset="100%" stop-color="#fb00ff" />
          </linearGradient>
        </defs>
        <g >
          <circle id='circle-1' className='blob-circle' cx="575" cy='500' r={easeInOutSine(time, 550, 25, duration)} fill="url(#NovaGrad)"/>
          <circle id='circle-3' className='blob-circle' cx="850" cy="1250" r={easeInOutSine(time, 175, 25, duration)} fill="url(#NovaGrad)"/>
          <circle id='circle-4' className='blob-circle' cx="950" cy="50" r={easeInOutSine(time, 300, 50, duration)} fill="url(#NovaGrad)"/>
          <circle id='circle-5' className='blob-circle' cx="350" cy="850" r={easeInOutSine(time, 325, 50, duration)} fill="url(#NovaGrad)"/>
          <circle id='circle-6' className='blob-circle' cx="150" cy="500" r={easeInOutSine(time, 300, 50, duration)} fill="url(#NovaGrad)"/>
        </g>
      </svg>

      <div className='splashText'>
        <h1 className='textLight'>
          Davd Schaarschmidt
        </h1>
        <div className='line'/>
        <h1 className='textLight'>
          Frontend Developer
        </h1>
      </div>
    </div>
  )
}