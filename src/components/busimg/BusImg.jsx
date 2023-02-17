import React from 'react'
import './busImg.css'
import BusSide from '../../asset/busside.png'
const BusImg = () => {
  return (
    <div className='bus_img'>
        <img src={BusSide} alt="bus"/>
    </div>
  )
}

export default BusImg