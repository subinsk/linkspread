import React from 'react'
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../redux/actions/auth';

import GoogleIcon from '../../images/icons/google.svg'

const GoogleSignIn = () => {
    const dispatch = useDispatch();

    const googleLoginHandler = () => {
        dispatch(loginWithGoogle());
    }

    return (
        <button onClick={googleLoginHandler} className='flex items-center p-1 space-x-2 rounded-md border-2 border-black'>
            <img height={17} width={17} src={GoogleIcon} alt="Google" />
            <span className='text-medium'>
                Continue with Google
            </span>
        </button>
    )
}

export default GoogleSignIn;

/* <div id="g_id_onload"
     data-client_id="bcxvxcv"
     data-context="signup"
     data-ux_mode="redirect"
     data-login_uri="cxxz"
     data-callback="dsfds">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="filled_blue"
     data-text="continue_with"
     data-size="large"
     data-logo_alignment="left">
</div> */