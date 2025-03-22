import React, { useState } from 'react'
import { KeyRound } from 'lucide-react'
import './CreateCredentialToken.css'

export default function CreateCredentialToken() {
    const [token, setToken] =useState('')
    const Token = () => {
        setToken("Andy est le meilleur !!");
    }
  return (
    <div className='CreateCredentialToken'>
        <div className="CreateCredentialTokenContainer">
            <div className='Text'>
                <div className="icone">
                <KeyRound className="w-8 h-8 text-blue-600" />
                </div>
                <h1>Create Credential Token</h1>
                <p>Générez votre credential token sécurisé ici. Ce token sera utilisé pour authentifier vos requêtes.</p>
            </div>
            <button className='generer' onClick={Token}> <KeyRound className="w-6 h-6 text-white"/><span className='tex' >generer un Token</span></button>
            <div className='w-full bg-white'>{ token.length == 0 ? <p className='h-15'></p> : <p className='token'>{token}</p> }</div>
        </div>
    </div>
  )
}
