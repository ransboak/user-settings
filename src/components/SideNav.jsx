import React,{useState} from 'react'
import {BsAward} from 'react-icons/bs'
import {RiProfileFill} from 'react-icons/ri'
import {FaUser} from 'react-icons/fa'
import {AiTwotoneSetting} from 'react-icons/ai'

const SideNav = () => {
    const [activeNav, setActiveNav] = useState('#dashboard')
  return (
    <nav className='side__nav'>
        <span><BsAward /></span>
        <ul> 
            <li id='dashboard' onClick={() => setActiveNav("#dashboard")} className={activeNav === '#dashboard' ? 'active__nav' : ''}><RiProfileFill /> Dashboard</li>
            <li id='profile' onClick={() => setActiveNav("#profile")} className={activeNav === '#profile' ? 'active__nav' : ''}><FaUser /> Profile</li>
            <li id='me'  onClick={() => setActiveNav("#me")} className={activeNav === '#me' ? 'active__nav' : ''}><FaUser />Dashboard</li>
            <li id='you'  onClick={() => setActiveNav("#you")} className={activeNav === '#you' ? 'active__nav' : ''}><FaUser />Dashboard</li>
            <li id='setting'  onClick={() => setActiveNav("#setting")} className={activeNav === '#setting' ? 'active__nav' : ''}><AiTwotoneSetting /> Setting</li>
        </ul>
    </nav>
  )
}

export default SideNav