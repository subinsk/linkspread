import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" />
    }
    return (
        <>
            {children}
        </>
    )
}

export default RequireAuth