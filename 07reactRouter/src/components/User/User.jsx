import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const { userid } = useParams()
  return (
    <div className='mx-auto w-full max-w-7xl text-center bg-gray-700 text-white py-4'>
      User: {userid}
    </div>
  )
}

export default User
