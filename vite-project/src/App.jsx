import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import GitHubLoginButton from './GitHubLoginButton';

const App = () => {
  const [user, setUser] = useState(null);
  const clientId = import.meta.env.VITE_GITHUB_LOGIN_API_TOKEN;
  const clientSecretId = import.meta.env.VITE_GITHUB_SECRET_API_TOKEN;


  const handleGoogleLoginSuccess = (response) => {
    console.log("hello");
    setUser({
      name: response.profileObj.name,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl,
    });
  };

  const handleGitHubLoginSuccess = async (response) => {
  // Exchange the GitHub code for an access token
  const accessTokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: {clientId},
      client_secret: {clientSecretId},
      code: response.code,
    }),
  });

  const accessTokenData = await accessTokenResponse.json();

  // Use the access token to fetch user details from GitHub
  const userDetailsResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessTokenData.access_token}`,
    },
  });

  const userDetails = await userDetailsResponse.json();

  // Handle successful GitHub login with user details
  setUser({
    name: userDetails.login,
    // Add other relevant user information available in the GitHub response
  });
};

console.log('====================================');

console.log('====================================');
  return (
    <div>
      {user ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} onFailure={console.error} />
          <GitHubLoginButton onSuccess={handleGitHubLoginSuccess} onFailure={console.error} />
        </div>
      )}
    </div>
  );
};

export default App;
