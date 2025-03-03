import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
        <div>Dsponible_meme_sur_smart_phone </div>
        <div className='FooterIcon'><Instagram/><Linkedin/><Facebook/></div>
    </div>
  )
}
