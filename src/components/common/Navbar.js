import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    const [isMobile, setMobile] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.onload = () => {
            handleResize()
        }
        function handleResize() {
            if (window.innerWidth < 750) {
                setMobile(true)
            }
            else setMobile(false)
        }

        window.addEventListener('resize', handleResize)
    })

    const navbarHandler = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }
    }
    return (

        <div className='flex w-full justify-between items-center h-12 px-6 fixed bg-white'>
            {
                isMobile ?
                    <>
                        {
                            toggle ? <MobileNavbar /> : ''
                        }
                    </>
                    :
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
            }
            <svg onClick={navbarHandler} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="rgb(29 78 216)">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    )
}

export default Navbar