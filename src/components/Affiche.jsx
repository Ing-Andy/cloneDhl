import React from 'react'
import { motion } from 'framer-motion'
import './Affiche.css'

export default function Affiche() {
  return (
    <motion.div className='Affiche'>
        <motion.div className='texte'>
            <h1>Credential - N M D</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aliquid adipisci perferendis nobis nostrum, eius commodi. Fugiat veniam nobis reprehenderit voluptas accusantium minus quas magnam id doloremque eaque, provident aperiam!</p>
            <div style={{height:'30px',display:'flex',}}>
                <motion.a className='a1'
                    whileHover={{
                        backgroundColor:'white',
                        color:'blue',
                        scale:'1.1px'
                    }}
                    href="#"
                    >inscription
                    </motion.a>

                <motion.a className='a2'
                    whileHover={{
                        backgroundColor:'white',
                        color:'blue',
                        scale:'1.1px',
                    }}
                href="#"
                >connection
                </motion.a>
            </div>
        </motion.div>
    </motion.div>
  )
}
