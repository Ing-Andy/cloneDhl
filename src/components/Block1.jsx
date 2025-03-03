import { color } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import './Block1.css'

export default function Block1({titre,descript,}) {
  return (
    <motion.div className='Block1'
    >
        <motion.h3 
            whileHover={{color:'blue',objectFit:'cover'}}
        >{titre}</motion.h3>
        <p>{descript}</p>
        <motion.a
        whileHover={{color:'blue', backgroundColor:'white'}}
        >
            savoir plus
        </motion.a>
    </motion.div>
  )
}
