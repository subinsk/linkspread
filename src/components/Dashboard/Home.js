import React from 'react'

import FolderCard from '../../components/Dashboard/FolderCard';
import Dashboard from '../../pages/Dashboard'
import PlusIcon from '../../components/Dashboard/common/PlusIcon'

const Home = () => {

    return (
        <Dashboard>
            <div className="flex flex-col">
                <PlusIcon />
                <div className='flex flex-col p-3'>
                    <p className='text-3xl pb-6 font-semibold'>Folders</p>
                    <hr />
                    <div className='flex flex-wrap justify-center py-10'>
                        <FolderCard folderName="My Links" />
                        <FolderCard folderName="My Links" />
                        <FolderCard folderName="My Links" />
                        <FolderCard folderName="My Links" />
                        <FolderCard folderName="My Links" />
                    </div>
                </div>
            </div>
        </Dashboard>

    )
}

export default Home