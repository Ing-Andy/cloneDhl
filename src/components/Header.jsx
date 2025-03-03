import React, { useState } from 'react'
import {  color, motion } from 'framer-motion'
import { AlarmClock, UserRound, Heart } from 'lucide-react'


export default function Header() {
    const [search,setSearch] = useState('');
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
  return (
    <header 
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height:'100px',
        position: 'fixed',
        top: '0',
        zIndex: '10000',
        backgroundColor:'white',
        width:'100%',
        backdropFilter: 'blur(10px)',
        }}>
        <div className="partieStart">
            <motion.ul 
            style={{
                display: 'flex',
                justifyContent:'start',
                listStyle: 'none',
                fontSize: 'large',
                marginLeft: '-20px',
                }}>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1,transition:'color 0.3s easy-in-out'}}
                    style={{margin: '0px 20px'}}
                >Aceuille</motion.li>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1,transition:'color 0.3s easy-in-out'}}
                    style={{margin: '0px 20px'}}
                >Galerie</motion.li>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1,transition:'color 0.3s easy-in-out'}}
                    style={{margin: '0px 20px'}}
                >Service</motion.li>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1,transition:'color 0.3s easy-in-out'}}
                    style={{margin: '0px 20px'}}
                >Help</motion.li>
            </motion.ul>
        </div>
        
        <motion.div 
        style={{
            fontSize: 'large',
            fontWeight: '900',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'end',
            alignItems: 'center',
            transitionProperty:'color scale',
            transitionDuration: '.5s',
            transitionTimingFunction: 'ease-in-out',
            // .5s easy-in-out'
        }}
        >
            <div style={{marginRight:'30px',height:'40px',border:'1px solid black',textAlign:'center',width:'300px',display:'flex',justifyContent:'center',alignItems:'center',flexGrow:'1'}}>
                <motion.input type="search"  style={{border:'none',outline:'none',width:'100%',padding:'10px',height:'40px'}} placeholder='vous voulez ?' onChange={handleChange} name='search'/>
                <motion.button type='submit' style={{border:'none',backgroundColor:'white',height:'40px',backgroundColor:'blue',color:'white'}}> Search</motion.button>
            </div>
            <motion.h3>Credential - N . M . D</motion.h3>
        </motion.div>
        <div className="partieEnd">
        <motion.ul style={{display: 'flex',listStyle: 'none'}}>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1}}
                    style={{margin: '0px 20px'}}
                ><UserRound size={40} strokeWidth={2} /></motion.li>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1}}
                    style={{margin: '0px 20px'}}
                ><Heart size={40}/></motion.li>
                <motion.li
                    whileHover={{color: 'blue',scale: 1.1}}
                    style={{margin: '0px 20px'}}
                ><AlarmClock size={40} strokeWidth={2} /></motion.li>
            </motion.ul>
        </div>
    </header>
  )
}
