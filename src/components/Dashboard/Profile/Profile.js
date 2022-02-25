import React, { useState } from 'react'
import Dashboard from '../../../pages/Dashboard'
import Avatar from '../../../images/icons/avatar.png'

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [showSaveButton, setSaveButton] = useState(false);

    return (
        <Dashboard>
            <div className='w-full px-12 py-6 space-y-10'>
                <h1 className='font-bold text-3xl'>Edit your Profile</h1>
                <div className='flex flex-col md:space-x-16 items-center space-y-8 md:flex-row'>
                    <div className='flex flex-col items-center space-y-4 p-3'>
                        <img className='border-[1px] rounded-full h-28' src={Avatar} alt="avatar" />
                        <label className='flex items-center justify-center space-x-2 cursor-pointer p-2 bg-violet-600 rounded-3xl'>
                            <span className='text-xs text-white'>Change Your Avatar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="rgb(255 255 255)">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <input className='hidden' type="file" name="avatar" id="avatar" />
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <label htmlFor="name" className='flex justify-center items-center space-x-2'>
                            <p>Name</p>
                            <input className='border-2 rounded-md' type="text" name="name" id="name" onClick={() => setSaveButton(true)} />
                        </label>
                        <label htmlFor="email" className='flex justify-center items-center space-x-3'>
                            <p>Email</p>
                            <input className='border-2 rounded-md' type="email" name="email" id="email" onClick={() => setSaveButton(true)} />
                        </label>
                        {showSaveButton ?
                            <button className='flex items-center w-1/4 justify-center space-x-2 p-2 bg-violet-600 rounded-3xl'>
                                <span className='text-base font-semibold text-white'>Save</span>
                            </button>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Profile