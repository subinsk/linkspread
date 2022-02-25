import React from 'react'
import { Link } from 'react-router-dom'
import LinkIcon from '../../images/vectors/link.svg'

const About = () => {
    return (
        <div className='flex flex-col items-center w-full px-2 space-y-4 py-28'>
            <div className='flex flex-col space-y-1 items-center'>
                <p className='text-4xl font-bold text-blue-800'>LinkSpread</p>
                <p className='text-base text-blue-800/90'>Share your links with others in an instant</p>
            </div>
            <img src={LinkIcon} alt="Link" />
            <Link to="/dashboard">
                <button className='p-2 text-sm bg-blue-900 text-white font-medium rounded-sm'>Spread the link!</button>
            </Link>
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_jw5bcjov.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    )
}

export default About