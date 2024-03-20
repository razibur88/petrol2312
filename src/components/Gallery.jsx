import React from 'react'
import Gal from "../assets/gal.png"
import Galreusable from './reusable/Galreusable'

const Gallery = () => {
  return (
    <div className="flex flex-wrap lg:gap-x-5">
        <Galreusable gal={Gal}/>
        <Galreusable gal={Gal}/>
        <Galreusable gal={Gal}/>
        <Galreusable gal={Gal}/>
       
    </div>
  )
}

export default Gallery