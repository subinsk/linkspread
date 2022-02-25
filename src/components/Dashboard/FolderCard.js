import React from 'react'

const FolderCard = ({ folderName }) => {
    return (
        <div className='flex items-center justify-center p-10 m-2 text-orange-700 border-[1px] bg-orange-100 rounded-md hover:shadow-md'>
            <p className='text-md font-semibold'>{folderName}</p>
        </div>
    )
}

export default FolderCard