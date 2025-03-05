import React from 'react'
import './Blockadmin.css'

export default function Blockadmin({titre,descript,detail}) {
  return (
    <div className='Blockadmin'>
        <h2>{titre}</h2>
        <p>{descript}</p>
        <span>{detail}</span>
    </div>
  )
}
