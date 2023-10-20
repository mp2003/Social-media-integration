import React from 'react'
import './profile.css'
const Profile = ({ name, email, picture }) => {

  return (
    <div>
      <img src={picture} className='profile_img' alt='profile' />
      <h1>{name} </h1>
      <h3>{email}</h3>

    </div>
  )
}

export default Profile
