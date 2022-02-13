import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
    login
} from '../../redux/actions/auth'
import GoogleSignIn from '../common/GoogleSignIn'

const Login = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.message)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
            .then(() => {
                if (message) {
                    console.log(message)
                }
            })
    }
    return (
        <div className='flex flex-col w-full justify-center items-center h-screen bg-blue-600/90'>
            <div className='flex flex-col justify-center items-center border-none space-y-8 rounded-md shadow-md p-8 bg-white'>
                <span className='text-2xl font-semibold'>Login</span>
                <form onSubmit={submitHandler} className="flex flex-col space-y-4">
                    <label className='flex flex-col' htmlFor="email">
                        Email:
                        <input value={email} onChange={e => setEmail(e.target.value)} className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="email" name="email" id="email" />
                    </label>
                    <label className='flex flex-col' htmlFor="password">
                        Password:
                        <input value={password} onChange={e => setPassword(e.target.value)} className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="password" name="password" id="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <GoogleSignIn />
                <span className='text-sm'>Didn't have an account? <Link to="/auth/register"><p className='underline text-blue-600'>Register Here</p></Link></span>
            </div>
        </div>
    )
}

export default Login