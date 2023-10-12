// src/components/Login.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login = () => {
  const history = useHistory();

  const responseFacebook = (response) => {
    // Handle Facebook login response
    console.log(response);
    // Redirect to the next page (profile page)
    history.push('/profile', { user: response });
  };

  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
    // Redirect to the next page (profile page)
    history.push('/profile', { user: response.profileObj });
  };

  return (
    <div>
      <h2>Login with Social Media</h2>
      <FacebookLogin
        appId="your-facebook-app-id"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <GoogleLogin
        clientId="your-google-client-id"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
