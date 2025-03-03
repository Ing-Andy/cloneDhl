import React from 'react'
import './BlockEtudiant.css'


export default function BlockEtudiant(image,nom,prenom,diplome,filiere,cycle) {
  return (
    <div className='BlockEtudiant'>
        <img src={image} alt="image" />
        <p>M./Mme/Mde : {prenom}  {nom}</p>
        <p>cycle: {cycle}</p>
        <p>filiere :{filiere}</p>
        <p>diplome: {diplome}</p>
    </div>
  )
}
