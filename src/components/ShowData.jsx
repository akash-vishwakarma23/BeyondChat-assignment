import React from 'react'
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'


const ShowData = () => {


  return (
    <div className='w-full h-screen  '>
        <div className='w-[92%] h-full ml-24 border-[1px]'> 
      <div className='flex items-center justify-between px-6 py-3 border-b-[1px]'>
        <h1 className='text-xl'>Data</h1>
        <div className='flex items-center gap-20 text-xl'>
            <h2>Sourse</h2>
            <h2>Type</h2>
            <h2>Created</h2>
            <h2>Actions</h2>
        </div>
        </div>
        <div className='flex items-center justify-between px-6 py-4 border-b-[1px] '>
            <h2 className='w-[60%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto ea possimus!</h2>
            <div className='flex items-center gap-[85px] '>
            <h3 className=''>--</h3>
            <div className='h-8 w-12 border-[1px] border-blue-400 rounded-full flex items-center justify-center font-semibold '><h3>Text</h3></div>
            <h4 className=''>8/3/2024</h4>
            <div className='flex items-center gap-3 text-2xl cursor-pointer'>
            <FaPen className='text-blue-500' />
            <MdDelete className='text-red-500' />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowData
