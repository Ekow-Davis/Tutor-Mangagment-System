import React from 'react'
import Sidebar from '../../Components/Layout/Sidebar'

const PaymentHistoryPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        Payment History
      </div>
    </div>
    </>
  )
}

export default PaymentHistoryPage