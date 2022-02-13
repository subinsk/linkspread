import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../services/supabaseclient';
import { googleClientID } from '../../config/index'
import { loginWithGoogle } from '../../redux/actions/auth';

const GoogleSignIn = () => {
    const dispatch = useDispatch();
    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        // dispatch(loginWithGoogle())
    }

    function intitalizeGoogleSignIn() {
        window.google.accounts.id.initialize({
            client_id: googleClientID,
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { text: "continue_with", theme: "filled_blue", size: "large", shape: "pill" }
        );
        window.google.accounts.id.prompt();

    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;

        script.onload = () => {
            intitalizeGoogleSignIn()
        }
        document.body.appendChild(script);
    })
    const onsubmi = async (e) => {
        supabase.auth.signIn({
            provider: 'google'
        })
            .then((res) => {

                alert(res.error)
                console.log(res)
                alert(res)
            })
            .catch((e) => {
                alert(e)
            })

    }
    return (
        <>
            <div id="buttonDiv"></div>
            <span onClick={onsubmi}>login</span>
        </>
    )
}

export default GoogleSignIn

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