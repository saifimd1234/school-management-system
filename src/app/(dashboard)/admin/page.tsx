import React from 'react'

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <div className='text-black w-full lg:w-2/3 bg-red-200'>l</div>
            {/* RIGHT */}
            <div className='w-full lg:w-1/3 bg-blue-200'>r</div>
        </div>
    )
}

export default AdminPage