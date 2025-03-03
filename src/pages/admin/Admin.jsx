import React from 'react'
import './Admin.css'
// import { div } from 'framer-motion/client'

export default function Admin() {
  return (
    <div className='container'>
      <div className="profile">
      <div className='adminimage'><img src="/src/image/pokemon.png" alt="joj" /></div> 
      <div>
        <h3>nom : votre nom</h3>
        <p>titre: votre titre</p>  
        <p>age  : votre age</p> 
      </div>
      </div>
      <div className='sectionadmin'>
        <div className="divblock1 adminBlock">1</div>
        <div className="divblock2 adminBlock">2</div>
        <div className="divblock3 adminBlock">3</div>
        <div className="divblock4 adminBlock">4</div>
      </div>
    </div>
  )
}
