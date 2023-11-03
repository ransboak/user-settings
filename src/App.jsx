import React from 'react'
import SideNav from './components/SideNav'
import MainNav from './components/MainNav'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'

const App = () => {
  return (
    <div className='app'>
        <SideNav />
        <div className="right__side">
        <MainNav />
        <div className="profile__row">
        <Profile />
        <EditProfile />
        </div>
        </div>
    </div>
  )
}

export default App