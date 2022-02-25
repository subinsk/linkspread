import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
    return (
        <div className='flex border-2 absolute top-12 left-0 right-0 flex-col h-32 bg-white items-center justify-center space-y-3 w-full'>
            <div className="flex flex-col justify-center items-center font-semibold space-y-4 text-2xl text-blue-700">
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