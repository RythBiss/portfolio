import React from 'react'

const star_fill = '#f7e3c8'
const star_radius = '5'
const stroke_fill ='#f7e3c840'
const stroke_width = '5'

const Orion = 
<svg className='constellation-svg' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Orion">
<g id="Dots">
<circle className='constellation-star' id="Star 7" cx="445" cy="439" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 6" cx="261" cy="501" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 5" cx="213" cy="265" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 4" cx="250" cy="249" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 3" cx="291" cy="232" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 2" cx="75" cy="103" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 1" cx="255" cy="38" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 0" cx="156" cy="14" r={star_radius} fill={star_fill}/>
</g>
<path id="Vector 1" d="M251.5 248.5L289.5 232.5M249 249.5L214.5 264.5M155 15L75 103L212 264M157.5 14.5L255 38L290.5 230.5M261 500L213.5 266.5M444.5 438L292 233" stroke={stroke_fill} stroke-width={stroke_width}/>
</g>
</svg>;

const Taurus = 
<svg className='constellation-svg' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
        <radialGradient id = "FadeGrad" cx = "50%" cy = "50%" r = "50%">
          <stop stop-color = "white" offset = "0%"/>
          <stop stop-color = "#75b1ff00" offset = "100%"/>
        </radialGradient>
      </defs>
<g id="Taurus" clip-path="url(#clip0_7_2)">
<g id="Dots">
<circle className='constellation-star' id="Star 11" cx="417.3" cy="490.038" r={star_radius} transform="rotate(22.0191 417.3 490.038)" fill={star_fill}/>
<circle className='constellation-star' id="Star 10" cx="413.712" cy="464.384" r={star_radius} transform="rotate(22.0191 413.712 464.384)" fill={star_fill}/>
<circle className='constellation-star' id="Star 9" cx="377.799" cy="410.764" r={star_radius} transform="rotate(22.0191 377.799 410.764)" fill={star_fill}/>
<circle className='constellation-star' id="Star 8" cx="239.94" cy="289.85" r={star_radius} transform="rotate(22.0191 239.94 289.85)" fill={star_fill}/>
<circle className='constellation-star' id="Star 7" cx="276.765" cy="319.637" r={star_radius} transform="rotate(22.0191 276.765 319.637)" fill={star_fill}/>
<circle className='constellation-star' id="Star 6" cx="323.679" cy="346.056" r={star_radius} transform="rotate(22.0191 323.679 346.056)" fill={star_fill}/>
<circle className='constellation-star' id="Star 5" cx="332.062" cy="290.801" r={star_radius} transform="rotate(22.0191 332.062 290.801)" fill={star_fill}/>
<circle className='constellation-star' id="Star 4" cx="312.855" cy="247.66" r={star_radius} transform="rotate(22.0191 312.855 247.66)" fill={star_fill}/>
<circle className='constellation-star' id="Star 3" cx="270.589" cy="157.958" r={star_radius} transform="rotate(22.0191 270.589 157.958)" fill={star_fill}/>
<circle className='constellation-star' id="Star 2" cx="36.02" cy="120.81" r={star_radius} transform="rotate(22.0191 36.02 120.81)" fill={star_fill}/>
<circle className='constellation-star' id="Star 1" cx="139.451" cy="5.32" r={star_radius} transform="rotate(22.0191 139.451 5.32)" fill={star_fill}/>
</g>
<path id="Vector 1" d="M323.5 346.5L377.5 410.5L413.5 464L417.5 489M324 345L332 291L313 247.5L270.5 158L140 5.99999M322 345.5L276.5 319.5L240 290L36 121" stroke={stroke_fill} stroke-width={stroke_width}/>
</g>
</svg>;

const Canis =
<svg className='constellation-svg' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
        <radialGradient id = "FadeGrad" cx = "50%" cy = "50%" r = "50%">
          <stop stop-color = "white" offset = "0%"/>
          <stop stop-color = "#75b1ff00" offset = "100%"/>
        </radialGradient>
      </defs>
<g id="Canis">
<g id="Dots">
<circle className='constellation-star' id="Star 1" cx="287.568" cy="100.886" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 2" cx="149.5" cy="335.091" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 4" cx="217" cy="117.25" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 15" cx="469.614" cy="427.136" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 16" cx="312.114" cy="494.636" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 9" cx="398.023" cy="215.432" r={star_radius} fill={star_fill}/>
<path id="Star 10" d="M268.913 287.534C268.913 288.639 268.018 289.534 266.913 289.534C265.809 289.534 264.913 288.639 264.913 287.534C264.913 286.43 265.809 285.534 266.913 285.534C268.018 285.534 268.913 286.43 268.913 287.534Z" fill={stroke_fill}/>
<circle className='constellation-star' id="Star 11" cx="233.364" cy="384.182" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 12" cx="195.523" cy="255.318" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 13" cx="95.2955" cy="367.818" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 14" cx="37" cy="443.5" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 7" cx="389.841" cy="133.614" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 8" cx="469.614" cy="117.25" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 5" cx="165.864" cy="76.3409" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 6" cx="238.477" cy="16" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 3" cx="249.727" cy="400.545" r={star_radius} fill={star_fill}/>
</g>
<path id="Vector 1" d="M286 101L217 117.5L165.5 76.5L238.5 16L217.5 116M287 102L195.5 255L149.5 335L233 383.5L267 287.5L388.5 133.452L289 101M250 401L249 400L233.544 385.719M250 402L311.5 494M251 401L468.936 427.593M390 135L398 214.5M391.323 133L468.5 117.5M148 335.5L95.5 368L37.5 442.5" stroke={stroke_fill} stroke-width={stroke_width}/>
</g>
</svg>;

const Scorpius =
<svg className='constellation-svg' width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
        <radialGradient id = "FadeGrad" cx = "50%" cy = "50%" r = "50%">
          <stop stop-color = "white" offset = "0%"/>
          <stop stop-color = "#75b1ff00" offset = "100%"/>
        </radialGradient>
      </defs>
<g id="Scorpius">
<g id="Dots">
<circle className='constellation-star' id="Star 1" cx="353.106" cy="132.649" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 2" cx="471.554" cy="16.4783" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 3" cx="489.777" cy="66.5911" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 4" cx="489.777" cy="132.649" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 5" cx="320.077" cy="188.456" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 11" cx="8.01176" cy="424.214" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 12" cx="43.3185" cy="390.046" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 13" cx="79.7641" cy="339.933" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 6" cx="271.104" cy="298.932" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 7" cx="261.992" cy="380.935" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 8" cx="257.436" cy="454.965" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 9" cx="168.6" cy="473.187" r={star_radius} fill={star_fill}/>
<circle className='constellation-star' id="Star 10" cx="61.5413" cy="464.076" r={star_radius} fill={star_fill}/>
</g>
<path id="Vector 1" d="M353.5 131L471 17.5M354 133.5L489 132.5M354 132L489 67M353 133L320 188.5L271 299L262 381L257.5 455L168.5 473L61.5 464L8 424L43.5 390L79.5 340" stroke={stroke_fill} stroke-width={stroke_width}/>
</g>
</svg>;

function onClickHandler(){
  console.log("on click")
}

export default function Constellation(props) {
  return (
    <div className={props.className} onClick={onClickHandler}>{eval(props.pattern)}</div>
  )
}
