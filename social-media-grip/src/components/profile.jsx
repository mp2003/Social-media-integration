import React from 'react'

const Profile = ({ name, email, picture }) => {

  return (
    <div>
      <h1>{name} </h1>
      <h3>{email}</h3>
      {picture && <img src={picture} alt="Profile" />}

    </div>
  )
}

export default Profile
