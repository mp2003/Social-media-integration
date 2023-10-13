// src/components/Profile.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    // Handle the case where user data is not available
    return <div>User data not found</div>;
  }

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
