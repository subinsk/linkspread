import React from 'react'

import { GoogleLogin } from 'react-google-login';

import {
    googleClientID
} from '../../config/index'

const GoogleSignIn = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId={googleClientID}
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Sign in with Google</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleSignIn