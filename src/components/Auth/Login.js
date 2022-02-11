import React from 'react'
import { Link } from 'react-router-dom'
import {
    signInWithGoogle
} from '../../services/authservice'
import GoogleSignIn from '../common/GoogleSignIn'

const Login = () => {
    const handleLogin = () => {
        const { user, session, error } = signInWithGoogle();
        console.log(user, " ", session, " ", error);
    }
    return (
        <div className='flex flex-col w-full justify-center items-center h-screen bg-blue-600/90'>
            <div className='flex flex-col justify-center items-center border-none space-y-8 rounded-md shadow-md p-8 bg-white'>
                <span className='text-2xl font-semibold'>Login</span>
                <div className="flex flex-col space-y-4">
                    <label className='flex flex-col' htmlFor="email">
                        Email:
                        <input className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="email" name="email" id="email" />
                    </label>
                    <label className='flex flex-col' htmlFor="password">
                        Password:
                        <input className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="password" name="password" id="password" />
                    </label>
                </div>
                <span className='text-sm'>Didn't have an account? <Link to="/auth/register"><p className='underline text-blue-600'>Signup Here</p></Link> </span>
                <button onClick={handleLogin} type='submit'>Login with Google</button>
                <GoogleSignIn />
            </div>
        </div>
    )
}

export default Login