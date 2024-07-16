import React from 'react'
import DashboardStats from '../../Components/DashboardStats'
import Navbar from "../../Components/Layout/Navbar"
import Sidebar from '../../Components/Layout/Sidebar'
import StatusCards from '../../Components/StatusCards'

const DashboardPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        <Navbar />
        DashboardPage
          <DashboardStats />
        <StatusCards
        label="Sessions Remaining"
        miniLabel="This Month"
        statistic="23"
        />

      </div>
    </div>
    
    </>
  )
}

export default DashboardPage