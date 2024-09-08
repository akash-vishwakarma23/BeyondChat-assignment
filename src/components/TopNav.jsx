import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className='w-full h-[11.3vh] border-b-[1px] pl-24 sticky top-0 z-40 bg-white'>
      <div className='flex items-center'>
        <div className='w-[%]'>
            <h2 className='text-2xl font-semibold'>Chatbot Mind Map</h2>
            <p className='w-[57%] text-sm'>This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here</p>
        </div>
        <div className='flex items-center gap-6 cursor-pointer'>
        <div className='w-40 h-10 px-3 py-2 border-[1px] border-blue-300 flex items-center justify-center rounded'>
                <h2 className='text-xl uppercase font-semibold text-blue-400'>guided tour</h2>
        </div>
        <div className='flex items-center gap-3'>
            <h2 className='uppercase text-xl font-semibold '>select org</h2>
            <FaChevronDown className='text-blue-400 text-sm ' />

        </div>
        <div className='w-12 h-12 border-[2px] border-blue-300 rounded-full flex items-center justify-center'>
                 <img className='h-10 bg-cover' src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
