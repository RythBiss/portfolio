import React from 'react'

const Orion = 

<svg className='constellation-svg' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Orion">
    <g id="Stars">
      <circle id="Star 7" cx="445.051" cy="436.051" r="19.0512" fill="#FFFFF2"/>
      <circle id="Star 6" cx="260.526" cy="499.526" r="9.52558" fill="#FFFFF2"/>
      <circle id="Star 5" cx="215.526" cy="267.526" r="9.52558" fill="#FFFFF2"/>
      <circle id="Star 4" cx="251.526" cy="250.526" r="9.52558" fill="#FFFFF2"/>
      <circle id="Star 3" cx="290.526" cy="231.526" r="9.52558" fill="#FFFFF2"/>
      <circle id="Star 2" cx="78.0512" cy="107.051" r="19.0512" fill="#FFFFF2"/>
      <circle id="Star 1" cx="258.526" cy="39.5256" r="9.52558" fill="#FFFFF2"/>
      <circle id="Star 0" cx="156.526" cy="13.5256" r="9.52558" fill="#FFFFF2"/>
    </g>
    <path id="Vector 1" d="M254.5 249.5L288 233M249 252.5L214.5 267.5M155 15L78 106.5L211.5 263M158 13.5L258 39.5L290 230M261 500L216.5 272.5M444.5 438L293 233" stroke="#FFFFF2" stroke-width="3"/>
  </g>
</svg>;

const Taurus = 

<svg className='constellation-svg' width="720" height="512" viewBox="0 0 720 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Taurus">
    <g id="Dots">
      <ellipse id="Ellipse 11" cx="681.988" cy="481.954" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 10" cx="665.028" cy="452.556" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 9" cx="595.065" cy="405.066" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 8" cx="376.695" cy="334.961" rx="16.9607" ry="18.0915" fill="#FFFFF2"/>
      <ellipse id="Ellipse 7" cx="427.577" cy="344.007" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 6" cx="497.54" cy="353.053" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 5" cx="480.58" cy="281.818" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 4" cx="436.058" cy="238.85" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 3" cx="340.654" cy="150.655" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 2" cx="37.4804" cy="220.759" rx="8.48037" ry="9.04573" fill="#FFFFF2"/>
      <ellipse id="Ellipse 1" cx="114.864" cy="38.7137" rx="16.9607" ry="18.0915" fill="#FFFFF2"/>
    </g>
    <path id="Vector 1" d="M500 355L596 405L665 453L682.5 483M497 350.5L480.5 281.5L436.5 238.5L340 150.5L114.5 38M494.5 353L428 344L377 335L37 220.5" stroke="#FFFFF2" stroke-width="3"/>
  </g>
</svg>;

export default function Constellation(props) {
  return (
    <div className={props.className}>{eval(props.pattern)}</div>
  )
}
