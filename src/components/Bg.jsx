import React from 'react'
import video from '../assets/videos/video.mp4'

const Bg = () => {
  return (
      <video src={video} className="video" autoPlay muted type="video/mp4" loop></video>
    
  )
}

export default Bg