import React from 'react'

import Navbar from '../components/Dashboard/common/Navbar';
import Topbar from '../components/Dashboard/common/Topbar';

const Dashboard = ({ children }) => {
    return (
        <div className='w-full'>
            <Topbar />
            <div className="flex">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Dashboard