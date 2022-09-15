import React from 'react'

export default function ProjectLink(props) {
  return (
    <a href={props.goTo} target='_blank' className='projectLink'>
        <h2 className='text-dark'>{props.title}</h2>
        <div className='project-seperator'/>
        <p className='text-dark hide-on-small'>{props.text}</p>
    </a>
  )
}
