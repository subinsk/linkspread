import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
    return (
        <div className='flex flex-col h-screen bg-white/70 items-center justify-center space-y-3 w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className="flex space-x-4">
                <Link to="/auth/login">
                    <span>
                        Login
                    </span>
                </Link>
                <Link to="/auth/register">
                    <span>
                        Register
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default MobileNavbar