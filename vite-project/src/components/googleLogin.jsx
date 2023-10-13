import React from 'react'
import GoogleLogin from 'react-google-login';

const googleLogin = () => {


    const clientId = import.meta.env.VITE_GOOGLE_LOGIN_API_TOKEN;

    const onSuccess = (res) => {
        console.log('Login successful', res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login failed", res);
    }

    return (
        <div className='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login to Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default googleLogin
