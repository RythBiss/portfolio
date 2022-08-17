import React, { useState, useEffect } from 'react'
import SpaceBlob from './SpaceBlob'

export default function Title() {

    const [circleR, setCircleR] = useState(350);

    useEffect(() => {
        setCircleRadius();
      });

    function setCircleRadius(){
      //can't be called at the top level within the app component, causes an ininite loop.5
        setCircleR(350);
      }

  return (
    <div className='splash-text-container'>
      <SpaceBlob styling='starBlob' r={circleR}/>
    </div>
  )
}
