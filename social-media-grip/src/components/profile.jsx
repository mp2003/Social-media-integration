import React from 'react'
import './profile.css'
const Profile = ({ name, email, picture }) => {

  return (
    <div className='userInfo'>
      <img src={picture} className='profile_img slide-in-blurred-left roll-in-blurred-left' alt='profile' />
      <div className="name">
        <h1 className='text-focus-in '>Name: {name} </h1>
        <h3 className='text-focus-in ' >email: <a href={`mailto:${email}`}>{email}</a></h3>
      </div>
    </div>
  )
}

export default Profile
