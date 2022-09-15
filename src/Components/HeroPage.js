import React from 'react'
import NavBar from './NavBar';
import Title from './Title'

export default function Hero(props) {

  const handleClick = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };  

  return (
    <div ref={props.setRef} className='hero-page-container'>
      <div id='title-container'>
        <Title />
      </div>
    </div>
  )
}
