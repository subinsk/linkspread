import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    return (
        <div className='flex justify-evenly w-full fixed bottom-0 md:w-auto md:left-0 md:h-screen md:flex-col md:sticky'>
            <Link to="/dashboard">
                <button className={`flex flex-col space-y-1 p-5 min-w-full items-center justify-center rounded-md hover:bg-violet-200/50 ${location.pathname === '/dashboard' ? 'bg-violet-200 text-violet-900' : ''} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className='text-xs'>
                        Links
                    </span>
                </button>
            </Link>
            <Link to="/profile">
                <button className={`flex flex-col p-5 space-y-1 items-center min-w-full justify-center rounded-md hover:bg-violet-200/50 ${location.pathname === '/profile' ? 'bg-violet-200 text-violet-900' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className='text-xs'>Profile</span>
                </button>
            </Link>
        </div>
    )
}

export default Navbar