// GitHubLoginButton.jsx
import React from 'react';
import GitHubLogin from 'react-github-login';

const GitHubLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = import.meta.env.VITE_GITHUB_LOGIN_API_TOKEN;

  return (
    <GitHubLogin
      clientId={clientId}
      redirectUri="http://localhost:3000"  // Update with your app's redirect URI
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Login with GitHub"
    />
  );
};

export default GitHubLoginButton;
