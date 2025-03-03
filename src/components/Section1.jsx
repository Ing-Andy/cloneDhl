import React from 'react'
import BlockSection1 from './BlockSection1'
import './Section1.css'
import { image } from 'framer-motion/client'

export default function Section1() {
    const dataListe1 =[
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
        {titre:"dsfasf",descript:"dsfasfdsdasdadasd",fin:"dsf"},
    ]
    const dataListe2 =[
        {image:'/src/image/image1.jpg',nom:'Nzoupet',prenom:"andy bryan",diplome:"ingenieur",filiere:"informatique",cycle:'ingenieur'},
        {image:'/src/image/image1.jpg',nom:'Nzoupet',prenom:"andy bryan",diplome:"ingenieur",filiere:"informatique",cycle:'ingenieur'},
        {image:'/src/image/image1.jpg',nom:'Nzoupet',prenom:"andy bryan",diplome:"ingenieur",filiere:"informatique",cycle:'ingenieur'},
        {image:'/src/image/image1.jpg',nom:'Nzoupet',prenom:"andy bryan",diplome:"ingenieur",filiere:"informatique",cycle:'ingenieur'},
        {image:'/src/image/image1.jpg',nom:'Nzoupet',prenom:"andy bryan",diplome:"ingenieur",filiere:"informatique",cycle:'ingenieur'},
    ]
  return (
    <div className='section1'>
        <ul className='listeSection1'>
            {dataListe1.map((el,index) => (
                <li key={index}> <BlockSection1 titre={el.titre} descript={el.descript} fin={el.fin}  heigt="150px" width="270px" /></li>
            ))}
        </ul>
        <hr />
        <div className="space">
            <ul className="listeSection2">
                {dataListe2.map((el,index)=>(
                    <li key={index}><BlockSection1 image={el.image} nom={el.nom} prenom={el.prenom} cycle={el.cycle} diplome={el.diplome} filiere={el.filiere}  heigt="200px" width="200px"/></li>
                ))}
            </ul>
        </div>
    </div>
  )
}