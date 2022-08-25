import React, { useEffect, useState } from 'react'

export default function AnimatedBlob(props) {
  
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

    console.log(`time: ${time}`);
  })

  //initialize the interval for time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);

    return () => clearInterval(interval);
  }, [])

  return (
    <svg id="Blob" data-name="Blob 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 275">
        <defs>
            <linearGradient id="NovaGrad" x1="-200" y1="-200" x2="200%" y2="200%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(65)">
                <stop offset="0%" stop-color="#0A1EFA" />
                <stop offset="100%" stop-color="#E60AFA" />
            </linearGradient>
        </defs>
        <g >
            <circle className='gradient-blob' id='big-blob-1' cx="360" cy="400" r={easeInOutSine(time, 400, 25, duration)} fill="url(#NovaGrad)"/>
            <circle className='gradient-blob' id='big-blob-2' cx="660" cy="540" r={easeInOutSine(time, 300, 25, duration)} fill="url(#NovaGrad)"/>
            <circle className='gradient-blob' id='big-blob-3' cx="420" cy="660" r={easeInOutSine(time, 350, 25, duration)} fill="url(#NovaGrad)"/>
            <circle className='gradient-blob' id='small-blob-1' cx="650" cy="300" r={easeInOutSine(time, 250, 50, duration)} fill="url(#NovaGrad)"/>
            <circle className='gradient-blob' id='small-blob-2' cx="640" cy="775" r={easeInOutSine(time, 225, 50, duration)} fill="url(#NovaGrad)"/>
            <circle className='gradient-blob' id='small-blob-3' cx="166" cy="607" r={easeInOutSine(time, 200, 50, duration)} fill="url(#NovaGrad)"/>
        </g>
    </svg>
  )
}