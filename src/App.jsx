import React from 'react'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/admin/Admin'
import Authentification from '../backend/auth/Authentification'

export default function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element = {<Store/>} />
        <Route path='ad' element={<Admin/>} />
        {/* <Route path='/admin' element = {<Authentification><Admin/></Authentification>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
