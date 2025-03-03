import React from 'react'
import './BlockSection1.css'
export default function BlockSection1({titre,descript,fin,heigt,width}) {
  return (
    <div className='BlockSection1' style={{height:`${heigt}`,width:`${width}`}}>
        <p>{titre}</p>
        <p>{descript}</p>
        <p>{fin}</p>
    </div>
  )
}
