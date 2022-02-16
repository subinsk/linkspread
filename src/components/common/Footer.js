import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div className='flex flex-col w-full items-center bg-blue-800 text-white p-3 text-sm'>
            <p>Copyright &copy; {date.getFullYear()}</p>
            <p>LinkSpread</p>
        </div>
    )
}

export default Footer