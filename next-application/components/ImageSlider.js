'use client'
import React, { useEffect, useState } from 'react'

import tiger from '../app/assets/m,.mk;.PNG'
import lion from '../app/assets/iuio.PNG'
import car from '../app/assets/grt.PNG'
import leopard from '../app/assets/Capturess.PNG'
import sambhar from '../app/assets/Capturemmm.PNG'
import turtle from '../app/assets/mn.PNG'
import snake from '../app/assets/Capture.PNG'

import classes from './imageslider.module.css'
import Image from 'next/image'
export const ImageSlider = () => {

    const photos=[tiger,lion,car,leopard,sambhar,turtle,snake]
    const[currentPhoto,setPhoto]=useState(photos[0])
const[ind,setInd]=useState(0)

// setInterval(()=>{
// setInd(ind<=photos.length-1? ind+1:0)
// console.log(ind)

// },5000)
  return (
    <div id={classes['imageslider-main-container']}>

<Image src={photos[ind]} priority alt='image..' />

    </div>
  )
}
