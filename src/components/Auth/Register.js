import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center h-screen bg-blue-600/90'>
            <div className='flex flex-col justify-center items-center border-none space-y-8 rounded-md shadow-md p-8 bg-white'>
                <span className='text-2xl font-semibold'>Register</span>
                <div className="flex flex-col space-y-4">
                    <label className='flex flex-col' htmlFor="name">
                        Name:
                        <input className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="text" name="text" id="text" />
                    </label>
                    <label className='flex flex-col' htmlFor="email">
                        Email:
                        <input className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="email" name="email" id="email" />
                    </label>
                    <label className='flex flex-col' htmlFor="password">
                        Password:
                        <input className='border-[1px] rounded-md outline-none focus:shadow-[0_0_0px_2px_rgba(37,99,235,0.8)]' type="password" name="password" id="password" />
                    </label>
                </div>
                <span className='text-sm'>Already have an account? <Link to="/auth/login"><p className='underline text-blue-600'>Login Here</p></Link></span>
            </div>
        </div>
    )
}

export default Register