'use client'

import Link from 'next/link'

const Homepage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mb-8'>School Management System</h1>
        <div className='grid grid-cols-2 gap-4'>
          <Link
            href='/admin'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition block text-center'
            role='button'
          >
            Admin
          </Link>
          <Link
            href='/teacher'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition block text-center'
            role='button'
          >
            Teacher
          </Link>
          <Link
            href='/student'
            className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition block text-center'
            role='button'
          >
            Student
          </Link>
          <Link
            href='/parent'
            className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition block text-center'
            role='button'
          >
            Parent
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage