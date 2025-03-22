import React, { useState } from 'react'
import './Login.css'
import Input from '../../components/form/Input'
import Password from '../../components/form/Password'
import CheckBox from '../../components/form/CheckBox'
import Image from 'next/image'
import personne from '../../pictures/personne.jpg'
import bibliotheque from '../../pictures/bibliotheque.jpg'
import { NavLink } from 'react-router-dom'


export default function Login() {
  const [login, setLogin] = useState(false)
  const change = () => {
    setLogin(!login)
  }
  return (
    <div className='Pagelogin'>
      <div className="form">
        <div className='textDebienvenue'>
          <h1> WELCOME BACK DEAR CLIENT</h1>
          {login ? <p>Enter your information to sign up for our platform</p> : <p>Enter your information to log in to our platform</p>}
        </div>
        <form action="">
          {login ? (<></>) : (
            <>
              <label htmlFor="name"> Name </label>
              <Input id='name' />
            </>
          )}
          <label htmlFor="Email">Email :</label>
          <Input id="Email"/>
          <label htmlFor="Password">Password :</label>
          <Password id="Password"/>
          <label htmlFor="check"><CheckBox id='check'/>Remember Me</label>
          {login ? (<button type="submit" className='bouton'> Log In</button>) : (<button type="submit" className='bouton'> sign In</button>)}
        </form>
          {login ? (<p className='paragraphe'>don't have an account <button onClick={change} type='submit' className='boutton2'> Log In </button></p>) : (<p className='paragraphe'>connect your self <button onClick={change} type='submit' className='boutton2'> Sign In</button> </p>)}
      </div>
      <div className="image">
        {login ? <Image src={personne} alt='info' /> : <Image src={bibliotheque} alt='info' />}
      </div>
    </div>
  )
}
