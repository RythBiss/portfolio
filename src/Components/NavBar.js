import React from 'react'

export default function NavBar(props) {
  
const handleClick = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };  

  return (
        <ul id='navBar' className={`${props.additionalClass}`}>
          <li onClick={() => handleClick(props.refArray[0])} className='navButton' >Home</li>
          <li onClick={() => handleClick(props.refArray[1])} className='navButton' >About</li>
          <li onClick={() => handleClick(props.refArray[2])} className='navButton' >Skills</li>
          <li onClick={() => handleClick(props.refArray[3])} className='navButton' >Projects</li>
          <li onClick={() => handleClick(props.refArray[4])} className='navButton' >Contact</li>
        </ul>
  )
}