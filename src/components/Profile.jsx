import React from 'react'
import {BiPencil} from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import profileItems from '../statics/data'

const Profile = () => {
  return (
    <ul className='profile__column'>
        {
            profileItems && profileItems.map(({Icon, action}, index) => {
                return(
                    <li key={index}>{Icon} <p>{action}</p> <IoIosArrowForward /></li>
                )
            })
        }
        
    </ul>
  )
}

export default Profile