import React from 'react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile'; // Make sure to import the Profile component
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';  // Import your global styles if needed

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container' >
      <header className='header c'>

        <h1 className='header_heading glassmorphsim center'>social media integration</h1>
        <p className='header_desc center'>Connect,Share,Thrive!!!<br />
          Your Social World, All in One App!</p>
      </header>
      <main>
        <section className='center'>
          {!isAuthenticated ? (
            <LoginButton />
          ) : (
            <>
              <LogoutButton />
              <Profile name={user.name} email={user.email} picture={user.picture} />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
