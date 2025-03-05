import React from 'react'
import './Asideadmin.css'

export default function Asideadmin(userImage,userName,userburn,userTitle) {
  return (
    <div className='profiles'>
        <div className="profile">
              <div className='adminimage'><img src="/src/image/pokemon.png" alt="joj" /></div> 
              <div className='user'>
                <h3>nom : votre nomdsds</h3>
                <p>titre: votre titre</p>  
                <p>age  : votre age</p> 
              </div>
        </div>
    </div>
  )
}
