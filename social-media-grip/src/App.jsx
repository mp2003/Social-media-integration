import React from 'react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile'; // Make sure to import the Profile component
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Login</h1>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <LogoutButton />
          <Profile name={user.name} email={user.email} picture={user.picture} />
        </>
      )}
    </div>
  );
};

export default App;
