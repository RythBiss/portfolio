import React from 'react'

export default function ProjectLink(props) {
  return (
    <a href={props.goTo} className='projectLink'>
        <h2 className='text-dark'>{props.title}</h2>
        <p className='text-dark hide-on-small'>{props.text}</p>
    </a>
  )
}
