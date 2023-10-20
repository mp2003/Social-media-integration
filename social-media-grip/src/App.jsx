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
      <header className='header '>

        <h1 className='header_heading glassmorphsim center'>social media integration</h1>

      </header>
      <main>
        <section >
          {!isAuthenticated ? (
            <div className='login_container'>
              <p className='_desc center'>Connect,Share,Thrive!!!<br />
                Your Social World, All in One App!</p>
              <LoginButton />
            </div >
          ) : (
            <>
              <Profile name={user.name} email={user.email} picture={user.picture} />

              <LogoutButton />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
