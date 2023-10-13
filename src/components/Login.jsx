// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login = () => {
    let ClientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const responseFacebook = (response) => {
    // Handle Facebook login response
    console.log(response);
    // Redirect to the next page (profile page)
    navigate('/profile', { state: { user: response } });
  };

  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
    // Redirect to the next page (profile page)
    navigate('/profile', { state: { user: response.profileObj } });
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
              clientId={ClientId}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outine-none "
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
    </div>
  );
};

export default Login;
