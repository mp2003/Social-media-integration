// src/components/Profile.js
import React from 'react';

const Profile = (props) => {
  const user = props.location.state.user;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Profile Picture: <img src={user.picture || user.imageUrl} alt="Profile" /></p>
    </div>
  );
};

export default Profile;
