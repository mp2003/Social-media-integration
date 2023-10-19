import React from 'react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile'; // Make sure to import the Profile component
import { useAuth0 } from '@auth0/auth0-react';
import './index.css'
const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <header className='header'>
        <nav>
          <h1 className='orange_gradient'>Login</h1>
        </nav>
      </header>
      <main>
        <section>
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
