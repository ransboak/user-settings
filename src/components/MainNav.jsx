import React from 'react'
import { AiFillBell } from 'react-icons/ai'
import Avatar from '../assets/avatar.jpg'
import {IoIosArrowDown} from 'react-icons/io'
const MainNav = () => {
  return (
    <nav className='main__nav'>
        <p>My Profile</p>
        <div className="extras">
            <AiFillBell />
            <img className='avatar' src={Avatar} alt="" />
            <IoIosArrowDown />
        </div>
    </nav>
  )
}

export default MainNav