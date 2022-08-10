import React from 'react'

const Orion = 

<svg id='stars' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M259 461L222.5 270.5L100.5 132.5L171 51L259 75.5L286.5 239L411.5 403M283.5 240.5L254 255L224 269.5" stroke="#FFFFF2" stroke-width="3"/>
        <g id='dots'>
            <circle cx="412" cy="404" r="8" fill="#FFFFF2"/>
            <circle cx="260" cy="465" r="8" fill="#FFFFF2"/>
            <circle cx="223" cy="268" r="8" fill="#FFFFF2"/>
            <circle cx="256" cy="255" r="8" fill="#FFFFF2"/>
            <circle cx="287" cy="239" r="8" fill="#FFFFF2"/>
            <circle cx="103" cy="133" r="8" fill="#FFFFF2"/>
            <circle cx="257" cy="75" r="8" fill="#FFFFF2"/>
            <circle cx="171" cy="51" r="8" fill="#FFFFF2"/>
        </g>
    </svg>;

export default function Constellation() {
  return (
    <div>{Orion}</div>
  )
}
