import React from 'react'
import './Admin.css'
import Header from "../../components/Header"
import Blockadmin from '../../components/Blockadmin'
import Asideadmin from '../../components/Asideadmin'

export default function Admin() {
  const dataAdmin = [
    {titre:"le titre",descript:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad dolorem voluptates! Commodi non saepe tempore facilis ducimus modi quidem, quos ipsam nemo sunt a. Consequuntur voluptas suscipit illo dolore!",detail:"je le savais bien"},
    {titre:"le titre",descript:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad dolorem voluptates! Commodi non saepe tempore facilis ducimus modi quidem, quos ipsam nemo sunt a. Consequuntur voluptas suscipit illo dolore!",detail:"je le savais bien"},
    {titre:"le titre",descript:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad dolorem voluptates! Commodi non saepe tempore facilis ducimus modi quidem, quos ipsam nemo sunt a. Consequuntur voluptas suscipit illo dolore!",detail:"je le savais bien"},
    {titre:"le titre",descript:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad dolorem voluptates! Commodi non saepe tempore facilis ducimus modi quidem, quos ipsam nemo sunt a. Consequuntur voluptas suscipit illo dolore!",detail:"je le savais bien"},
  ]
  return (
    <div className='container'>
      <aside className="asideAdmin">
        <Asideadmin />
      </aside>
      <div className='sectionadmin'>
        <h1>VOS OPTIONS d'ADMINISTRATEUR</h1>
        <ul className="listeAdmin">
        {dataAdmin.map((el,index) => (
          <li key={index}><Blockadmin titre={el.titre} descript={el.descript} detail={el.detail} /></li>
        ))}
        </ul>
      </div>
    </div>
  )
}
