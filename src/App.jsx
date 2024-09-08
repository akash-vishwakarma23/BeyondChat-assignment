import React from 'react'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import Centerpart from './components/Centerpart'
import ShowData from './components/ShowData'


const App = () => {
  return (
    <div className='w-full h-screen   '>
      <div className='flex gap-20'>
      <SideNav />
      </div>
      
      <TopNav />
      <Centerpart />
      <ShowData />
      
    </div>
  )
}

export default App
