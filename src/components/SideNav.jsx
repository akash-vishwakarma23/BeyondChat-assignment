import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { MdOutlineArchive } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { BiColumns } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SideNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSidebar = () => {
        
        setIsExpanded(!isExpanded);
      };
  return (
    <div className={`h-screen w-20 transition-all duration-300 border-r-[1px] border-[#808080] fixed z-50  ${
          isExpanded ? 'w-[20%] && bg-white' : 'w-20'
        }`}>
          <div className='text-2xl flex items-center justify-evenly py-7 text-[#808080] border-b-[1px] '>
          <FiMenu onClick={toggleSidebar} className= {`ml-7 ${isExpanded ? 'scale-0' : 'scale-1'}`} />
          <IoIosArrowBack onClick={toggleSidebar} className= {` ${isExpanded ? 'scale-1' : 'scale-0'}`} />
          </div>
       
      <div className={` text-2xl text-[#808080] w-full `}>
        <div className='pl-6 flex items-center gap-6 py-4'>
        <MdOutlineArchive />
        <h6 className={` text-xl ${isExpanded ? 'inline' : 'hidden'}`}>Explore Chats</h6>
        </div>
        <div className='pl-6 flex items-center gap-6  py-4' >
        <MdContactPhone />
        <h6 className={`text-xl ${isExpanded ? 'inline' : 'hidden'}`}>Business Leads</h6>
        </div>
        <div className='pl-6 flex items-center gap-6 py-4  bg-blue-100 '>
        <BiColumns className='text-blue-400 ' />
        <h6 className={`text-xl ${isExpanded ? 'inline' : 'hidden'}`}>View Mind Map</h6>
        </div>
        <div className='pl-6 flex items-center gap-6 py-4'>
        <FaUsers />
        <h6 className={`text-xl ${isExpanded ? 'inline' : 'hidden'}`}>Manage Team</h6>
          </div>
          <div className='pl-6 flex items-center gap-6 py-4'>
          <IoMdSettings />
          <h6 className={`text-xl ${isExpanded ? 'inline' : 'hidden'}`}>Configure Chatbot</h6>
          </div>
      
      
      
      
      
      </div>
    </div>
  )
}

export default SideNav
