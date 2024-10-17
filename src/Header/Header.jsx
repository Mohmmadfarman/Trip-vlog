import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-row w-[90%] h-[70px] bg-[#0b0d0dd9] justify-between items-center fixed rounded-md'>
        <div className='text-3xl text-white ml-6'>Trippy</div>
        <div className='flex items-center justify-between'>
            <li> <NavLink id='n' to={'/'}>Home</NavLink> </li>
            <li> <NavLink id='n' to={'/about'}>About</NavLink> </li>
            <li> <NavLink id='n' to={'/service'}>Service</NavLink> </li>
            <li> <NavLink id='n' to={'/contact'}>Contact</NavLink> </li>
        </div>
      
    </div>
  )
}

export default Header
