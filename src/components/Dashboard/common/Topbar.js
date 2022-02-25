import React from 'react'
import { logout } from '../../../redux/actions/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import Logo from '../../common/Logo'

const Topbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout(navigate))
    }
    return (
        <div className='flex items-center justify-between w-full px-8 md:bg-slate-100'>
            <Logo />
            <button onClick={logoutHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z" /></svg>
            </button>
        </div>
    )
}

export default Topbar