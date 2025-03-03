import React from 'react'
import './AsideStore.css'
export default function AsideStore() {
  return (
    <div className='AsideStore'>
        <div className="div1">
            <fieldset>
                <legend>Cycle</legend>
                <p>Doctora</p>
                <p>Ingenieur</p>
                <p>DUT</p>
                <p>Secondaire</p>
            </fieldset>
        </div>
        <div className="div2">
            <fieldset>
                <legend>Filiere</legend>
                <p>Informatique</p>
                <p>Genie Civil</p>
                <p>Mecanique</p>
                <p>Mecatronique</p>
                <p>Electique</p>
                <p>Electronique</p>
                <p>Comptabilite</p>
                <p>Banque & Finance</p>
                <p>E-comerce</p>
                <p>Marketing</p>
            </fieldset>
        </div>
        <div className="div3">
            <fieldset>
                <legend>Niveau</legend>
                <p>Bepc</p>
                <p>Probatoire</p>
                <p>Baccalaureat</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>recherche</p>
            </fieldset>
        </div>
    </div>
  )
}
