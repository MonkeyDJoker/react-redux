import React from 'react'
import { NavLink } from 'react-router-dom'


export default function App() {

  return (
    <div>
       <div>
        <NavLink to='/Home' >Home</NavLink>
        <hr />
        <NavLink to='/About' >About</NavLink>
        <hr/>

      </div>
    </div>
  )
}
