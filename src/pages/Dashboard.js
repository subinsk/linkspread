import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/auth'

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout(navigate))
    }
    return (
        <div>
            Dashboard
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Dashboard