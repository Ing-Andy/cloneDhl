import React from 'react'

export default function Authentification(user,matricul) {
  return user && matricul ? <Admin /> : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>error</div>
}
