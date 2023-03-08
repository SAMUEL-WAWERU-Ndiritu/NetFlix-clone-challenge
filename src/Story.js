import React from 'react'
import './Story.css'
import {Avatar} from '@material-ui/core';
function Story({image,profileSrc,title}) {
  return (
    <div className="story" style={{background:`url(${image})`}}>
    <Avatar src={profileSrc}/>
    <h4>{title}</h4>
    </div>
  )
}

export default Story