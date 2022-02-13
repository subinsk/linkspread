import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const user = useSelector(state => state.user ? user : null)

    if (!user) {
        return <Navigate to="/auth/login" />
    }
    return (
        { children }
    )
}

export default RequireAuth